import { Text, View, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { styleWeatherLondon } from "../styles/styles";

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
} //for useState

const WeatherLondon = (): React.JSX.Element => {
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchWeatherData = async () => {
    const API_KEY = "d78aaab2d84844433d115114fb3bb62e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(URL);
      setState({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "Failed to fetch weather data",
      });
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (state.loading) {
    return (
      <View style={styleWeatherLondon.centeredContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (state.error) {
    return (
      <View style={styleWeatherLondon.centeredContainer}>
        <Text style={styleWeatherLondon.errorText}>{state.error}</Text>
      </View>
    );
  }

  return (
    <View style={styleWeatherLondon.container}>
      <Text style={styleWeatherLondon.cityName}>{state.data.name}</Text>
      <Text style={styleWeatherLondon.temp}>{state.data.main.temp} ํC</Text>

      <Text style={styleWeatherLondon.weatherMain}>
        {state.data.weather[0].main}
      </Text>

      <Text style={styleWeatherLondon.weatherDescription}>
        {state.data.weather[0].description}
      </Text>

      <FlatList
        contentContainerStyle={styleWeatherLondon.details}
        data={[
          { key: "Feels like", value: `${state.data.main.feels_like} ํC` },
          { key: "Min Temp", value: `${state.data.main.temp_min} ํC` },
          { key: "Max Temp", value: `${state.data.main.temp_max} ํC` },
          { key: "Humidity", value: `${state.data.main.humidity}%` },
          { key: "Pressure", value: `${state.data.main.pressure} hPa` },
        ]}
        renderItem={({ item }) => (
          <View style={styleWeatherLondon.detailContainer}>
            <Text style={styleWeatherLondon.detailKey}>{item.key}</Text>
            <Text style={styleWeatherLondon.detailValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default WeatherLondon;
