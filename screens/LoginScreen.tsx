import { View } from "react-native";
import React, { useState } from "react";
import { Text, Card, Input, Button, Icon } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { login } from "../services/auth-service";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";
import { setIsLogin } from "../auth/auth-slice";
import { useAppDispatch } from "../redux-toolkit/hook";

const LoginScreen = (): React.JSX.Element => {
  //prep show password button
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  //input validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input Email")
      .email("Email format is invalid"),
    password: yup
      .string()
      .required("Please input Password")
      .min(3, "Password must be at least 3 character."),
  });
  //Apply with React Hook Form

  const {
    control, //control input field
    handleSubmit, //control when form is being submit
    formState: { errors, isSubmitting, isValid },
    //take errors , isSubmiting and isValid to check
  } = useForm({
    resolver: yupResolver(schema), //choose yup schema for validation
    mode: "all", //check validation everytime input change
  }); //end of useForm()

  const onLogin = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      //status 200 = success
      if (response.status == 200) {
        dispatch(setIsLogin(true));

        //Toast.show({ type: "success", text1: "Login Success" });
        //console.log("login success");
      }
    } catch (error: any) {
      //handle Error from Axios
      let err: AxiosError<any> = error; //parse error into something readable
      //status 401
      if (err.response?.status == 401) {
        Toast.show({ type: "error", text1: err.response.data.message });

        console.log(err.response.data.message);
      } else {
        Toast.show({ type: "error", text1: "cannot connect to Server" });

        console.log("cannot connect to Server");
      }
    }

    //console.log(data);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              rightIcon={
                //add icon for show/hide password input
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  type="feather"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              keyboardType="default"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Button
          size="lg"
          title="Log In"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid} /*cannot click until input is valid */
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
