/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Avatar from '../../Component/Avatar';
import {ButtonX} from '../../Component/Button';
import {theme} from '../../Customs/Colos';
import {ROUTES} from '../../Navigation/Routes';

const data = [
  {
    name: 'Firstname Lastname',
    email: 'email@gmail.com',
    position: {longitude: -122, latitude: 37.78825},
    profile:
      'data:image/jpeg;base64,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',
  },
  {
    name: 'Firstname1 Lastname',
    email: 'email@gmail.com',
    position: {longitude: -122.5, latitude: 37.78825},
    profile: 'https://www.dailysia.com/wp-content/uploads/2020/06/nayeon-1.jpg',
  },
  {
    name: 'Firstname2 Lastname',
    email: 'email@gmail.com',
    position: {longitude: -122.2, latitude: 37.8825},
  },
  {
    name: 'Firstname3 Lastname',
    email: 'email@gmail.com',
    position: {longitude: -122, latitude: 37.78825},
  },
  {
    name: 'Firstname4 Lastname',
    email: 'email@gmail.com',
    position: {longitude: -122, latitude: 37.25825},
  },
];

function MapScreen() {
  const [modal, setModal] = useState({data: null, show: false});

  const handleModal = (e: any) => {
    setModal({data: e, show: true});
  };
  return (
    <React.Fragment>
      <PopUp modal={modal} setModal={setModal} />
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map((marker, index) => (
          <Marker
            key={index}
            onPress={() => handleModal(marker)}
            coordinate={marker.position}
            title={marker.name}
            description={marker.email}
          />
        ))}
      </MapView>
    </React.Fragment>
  );
}

export default MapScreen;

const PopUp = (_props: any) => {
  const {modal, setModal} = _props;
  const style = styleTheme();
  const {navigate} = useNavigation<any>();

  const onSelect = () => {
    navigate(ROUTES.USERS.PROFILE, {
      name: modal?.data?.name,
      email: modal?.data?.email,
      profile: modal?.data?.profile ? modal?.data?.profile : '',
    });
    setModal({...modal, show: !modal.show});
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modal.show}
      onRequestClose={() => {
        setModal({...modal, show: !modal.show});
      }}>
      <Pressable
        style={style.centeredView}
        onPress={event =>
          event.target === event.currentTarget &&
          setModal({...modal, show: !modal.show})
        }>
        <View style={style.modalBox}>
          <Avatar profile={modal?.data?.profile} size={84} />
          <Text style={style.textName}>{modal?.data?.name}</Text>
          <ButtonX label="Select" onPress={onSelect} />
        </View>
      </Pressable>
    </Modal>
  );
};

const styleTheme = () => {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalBox: {
      backgroundColor: 'white',
      width: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    textName: {
      fontSize: 18,
      fontFamily: theme.font.PoppinsL,
      marginVertical: 20,
    },
  });
};
