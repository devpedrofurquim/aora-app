import { View, Image, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import Form from '../../components/Form'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all information');
      return 1;
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);

      // set to global state

      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
           <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
           />
           <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign Up to Aora</Text>
           <Form
            title="Username"
            value={form.username}
            handleChangeText={(e) => {setForm({...form, username: e})}}
            otherStyles="mt-7"
            keyboardType="username"
           />

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
            children='Sign Up'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Have an account already?</Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp