import { View, Image, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import Form from '../../components/Form'
import Button from '../../components/Button'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
           <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
           />
           <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
           <Form
            title="Email"
            value={form.email}
            handleChangeText={(e) => {setForm({...form, email: e})}}
            otherStyles="mt-7"
            keyboardType="email-address"
           />

           <Form
            title="Password"
            value={form.password}
            handleChangeText={(e) => {setForm({...form, password: e})}}
            otherStyles="mt-7"
            keyboardType="password"
           />

          <Button
            children='Sign In'
            handlePress={() => {}}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Don't have an account?</Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn