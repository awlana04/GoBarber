import React, { useRef, useState, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  Alert,
  Platform,
  ScrollView,
  View,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  BackButton,
  UserAvatarButton,
  UserAvatar,
  Title,
} from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const passwordConfirmationInputRef = useRef<TextInput>(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();

  const { user, updateUser } = useAuth();

  const handleSignUp = useCallback(
    async (data: ProfileFormData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().required().email(),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: true,
            then: Yup.string().min(6).required(),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null])
            .when('old_password', {
              is: true,
              then: Yup.string().min(6).required(),
              otherwise: Yup.string(),
            }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('profile', formData);

        updateUser(response.data);

        Alert.alert('Perfil atualizado com sucesso!');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors({
            name: 'Nome obrigatório',
            email: 'E-mail obrigatório',
            old_password: 'Digite sua senha atual',
            password: 'No mínimo 6 dígitos',
            passoword_confirmation: 'Confirmação incorreta',
          });
        }

        Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.'
        )
      }
    },
    [updateUser, navigation],
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleUpdateAvatar = useCallback(async () => {
    const pickerPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (pickerPermission.granted === false) {
      Alert.alert(
        'Acesso negado!',
        'É necessário permitir acesso à sua galeria para atualizar o avatar'
      );
    }

    const pickerImage = await ImagePicker.launchImageLibraryAsync();

    if (pickerImage.cancelled === true) {
      return;
    }

    // setSelectedImage({ uri: pickerImage.uri });
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView>
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#999591" />
            </BackButton>

            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={{ uri: user.avatar_url }} />
            </UserAvatarButton>

            <View>
              <Title onPress={handleUpdateAvatar}>Meu perfil</Title>
            </View>

            <Form initialData={user} ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => oldPasswordInputRef.current?.focus()}
              />

              <Input
                ref={oldPasswordInputRef}
                textContentType="newPassword"
                autoCapitalize="none"
                name="old_password"
                icon="lock"
                placeholder="Senha atual"
                secureTextEntry
                returnKeyType="next"
                containerStyle={{ marginTop: 16 }}
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                textContentType="newPassword"
                autoCapitalize="none"
                name="password"
                icon="lock"
                placeholder="Nova senha"
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordConfirmationInputRef.current?.focus()
                }
              />

              <Input
                ref={passwordConfirmationInputRef}
                textContentType="newPassword"
                autoCapitalize="none"
                name="password_confirmation"
                icon="lock"
                placeholder="Confirmar senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Confirmar mudanças
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
