import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import { icons } from "@/constants";

import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {
    return null;
  };

  return (
    <ScrollView className={`flex-1 bg-white`}>
      <View className={`flex-1 bg-white`}>
        <View className={`relative w-full h-[250px]`}>
          <Image source={images.signUpCar} className={`w-full z-0 h-[250px]`} />
          <Text
            className={`text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5`}
          >
            Create Your Account
          </Text>
        </View>

        <View className={`p-5`}>
          <InputField
            label={`Name`}
            placeholder={"Enter your name"}
            icon={icons.person}
            value={form.name}
            onChangeText={() => setForm({ ...form, name: form.name })}
          />
          <InputField
            label={`Email`}
            placeholder={"Enter your email"}
            icon={icons.email}
            value={form.email}
            onChangeText={() => setForm({ ...form, email: form.email })}
          />
          <InputField
            label={`Password`}
            placeholder={"Enter your password"}
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={() => setForm({ ...form, password: form.password })}
          />

          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href="/sign-in"
            className={`text-lg text-center text-general-200 mt-10`}
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>

          {/*Verification Model*/}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
