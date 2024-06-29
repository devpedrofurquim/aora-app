import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants' 

const Search = ({title, value, placeholder, keyboardType, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
        <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex flex-row justify-center space-x-4">
        <TextInput
          className="text-base text-white flex-1 mt-0.5 font-pregular"
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={keyboardType === 'password' && !showPassword}
          keyboardType={keyboardType}
          {...props}
        />
        <TouchableOpacity className="">
       <Image
         source={icons.search}
         className="w-5 h-5"
         resizeMode='contain'
       />
     </TouchableOpacity>
      </View>
    </>
  )
}

export default Search;