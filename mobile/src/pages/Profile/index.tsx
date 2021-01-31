import React, { useRef, useCallback } from 'react';
import {
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

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

  const { user, updateUser } = useAuth();

  const { goBack } = useNavigation();

  const handleSubmit = useCallback(
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

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        Alert.alert(
          'Perfil atualizado!',
          'Suas informações do perfil foram atualizadas com sucesso!',
        );

        goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors({
            name: 'Nome obrigatório',
            email: 'E-mail obrigatório',
            old_password: 'Senha atual obrigatória',
            password: 'No mínimo 6 dígitos',
            password_confirmation: 'Confirmar senha obirgatória',
          });
        }

        Alert.alert(
          'Erro na atualização',
          'Ocorreu um erro ao atualizar o seu perfil, tente novamente.',
        );
      }
    },
    [updateUser, goBack],
  );

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleUpdateAvatar = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.errorCode) {
          Alert.alert('Erro ao atualizar seu avatar.');

          return;
        }

        const data = new FormData();

        data.append('avatar', {
          type: 'image/jpeg',
          name: `${user.id}.jpeg`,
          uri: response.uri,
        });

        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);
        });
      },
    );
  }, [user.id, updateUser]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#999591" />
            </BackButton>

            <UserAvatarButton onPress={handleUpdateAvatar}>
              <UserAvatar source={{ uri: user.avatar_url }} />
            </UserAvatarButton>

            <View>
              <Title>Meu perfil</Title>
            </View>

            <Form initialData={user} ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />

              <Input
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => oldPasswordInputRef.current?.focus()}
              />

              <Input
                ref={oldPasswordInputRef}
                name="old_password"
                icon="lock"
                placeholder="Senha atual"
                autoCorrect={false}
                autoCapitalize="none"
                containerStyle={{ marginTop: 16 }}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Nova senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordConfirmationInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordConfirmationInputRef}
                name="password_confirmation"
                icon="lock"
                placeholder="Confirmar senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                textContentType="newPassword"
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
