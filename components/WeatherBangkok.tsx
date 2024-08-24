import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { styleWeatherBangkok } from "../styles/styles";

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
  currentDate: Date | null;
} //for useState

const formatDate = (date: Date | null): string => {
  if (!date) return "";
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("th-TH", option);
};

const WeatherBangkok = (): React.JSX.Element => {
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
    currentDate: new Date(),
  });

  const fetchWeatherData = async () => {
    const API_KEY = "d78aaab2d84844433d115114fb3bb62e";
    //const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${API_KEY}&units=metric&lang=th`;

    try {
      const response = await axios.get(URL);
      setState({
        data: response.data,
        loading: false,
        error: null,
        currentDate: new Date(),
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "Failed to fetch weather data",
        currentDate: null,
      });
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (state.loading) {
    return (
      <View style={styleWeatherBangkok.centeredContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (state.error) {
    return (
      <View style={styleWeatherBangkok.centeredContainer}>
        <Text style={styleWeatherBangkok.errorText}>{state.error}</Text>
      </View>
    );
  }

  return (
    <View style={styleWeatherBangkok.container}>
      <Text style={style.test}>{formatDate(state.currentDate)}</Text>
      <Text style={styleWeatherBangkok.cityName}>{state.data.name}</Text>
      <Text style={styleWeatherBangkok.temp}>{state.data.main.temp} ํC</Text>

      <Text style={styleWeatherBangkok.weatherMain}>
        {state.data.weather[0].main}
      </Text>

      <Text style={styleWeatherBangkok.weatherDescription}>
        {state.data.weather[0].description}
      </Text>

      <FlatList
        contentContainerStyle={styleWeatherBangkok.details}
        data={[
          { key: "รู้สึกเหมือน:", value: `${state.data.main.feels_like} ํC` },
          { key: "อุณหภูมิต่ำสุด:", value: `${state.data.main.temp_min} ํC` },
          { key: "อุณหภูมิสูงสุด:", value: `${state.data.main.temp_max} ํC` },
          { key: "ความชื้น:", value: `${state.data.main.humidity}%` },
          { key: "แรงดันอากาศ:", value: `${state.data.main.pressure} hPa` },
        ]}
        renderItem={({ item }) => (
          <View style={styleWeatherBangkok.detailContainer}>
            <Text style={styleWeatherBangkok.detailKey}>{item.key}</Text>
            <Text style={styleWeatherBangkok.detailValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default WeatherBangkok;

const style = StyleSheet.create({
  test: {
    fontSize: 20,
  },
});
