/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, Button, Image } from 'react-native';
import Slider from '@react-native-community/slider';

const FindPartner = () => {
  const originalProfiles = [
    { name: 'John Doe', distance: 5, gender: 'male', disability: 'none' },
    { name: 'Jane Smith', distance: 3, gender: 'female', disability: 'none' },
    { name: 'Sam Wilson', distance: 10, gender: 'male', disability: 'none' },
    { name: 'Alex Johnson', distance: 2, gender: 'other', disability: 'none' },
    { name: 'Emily Davis', distance: 7, gender: 'female', disability: 'hearing impairment' },
    { name: 'Michael Brown', distance: 4, gender: 'male', disability: 'mobility impairment' },
    { name: 'Alice Walker', distance: 12, gender: 'female', disability: 'none' },
    { name: 'Bob Harris', distance: 15, gender: 'male', disability: 'visual impairment' },
    { name: 'Charlie Martin', distance: 8, gender: 'male', disability: 'none' },
    { name: 'David Lee', distance: 14, gender: 'male', disability: 'none' },
    { name: 'Eva Clark', distance: 6, gender: 'female', disability: 'hearing impairment' },
    { name: 'Frank White', distance: 3, gender: 'male', disability: 'mobility impairment' },
    { name: 'Grace Lewis', distance: 11, gender: 'female', disability: 'none' },
    { name: 'Hannah Young', distance: 9, gender: 'female', disability: 'visual impairment' },
    { name: 'Ivan Scott', distance: 7, gender: 'male', disability: 'none' },
    { name: 'Jack King', distance: 13, gender: 'male', disability: 'none' },
    { name: 'Katie Green', distance: 5, gender: 'female', disability: 'hearing impairment' },
    { name: 'Liam Hall', distance: 2, gender: 'male', disability: 'mobility impairment' },
    { name: 'Mona Allen', distance: 10, gender: 'female', disability: 'none' },
    { name: 'Nathan Wright', distance: 4, gender: 'male', disability: 'visual impairment' },
    { name: 'Olivia Lopez', distance: 6, gender: 'female', disability: 'none' },
    { name: 'Paul Hill', distance: 9, gender: 'male', disability: 'none' },
    { name: 'Quinn Adams', distance: 8, gender: 'other', disability: 'hearing impairment' },
    { name: 'Rachel Baker', distance: 5, gender: 'female', disability: 'mobility impairment' },
    { name: 'Sam Nelson', distance: 3, gender: 'male', disability: 'none' },
    { name: 'Tina Carter', distance: 10, gender: 'female', disability: 'visual impairment' },
    { name: 'Uma Mitchell', distance: 7, gender: 'female', disability: 'none' },
    { name: 'Victor Perez', distance: 6, gender: 'male', disability: 'none' },
    { name: 'Wendy Roberts', distance: 13, gender: 'female', disability: 'hearing impairment' },
    { name: 'Xander Turner', distance: 11, gender: 'male', disability: 'mobility impairment' },
    { name: 'Yara Phillips', distance: 4, gender: 'female', disability: 'none' },
    { name: 'Zack Campbell', distance: 8, gender: 'male', disability: 'visual impairment' },
    { name: 'Alice Carter', distance: 12, gender: 'female', disability: 'none' },
    { name: 'Bob Rodriguez', distance: 15, gender: 'male', disability: 'none' },
    { name: 'Charlie Brooks', distance: 8, gender: 'male', disability: 'hearing impairment' },
    { name: 'David Sanders', distance: 14, gender: 'male', disability: 'mobility impairment' },
    { name: 'Eva Price', distance: 6, gender: 'female', disability: 'none' },
    { name: 'Frank Butler', distance: 3, gender: 'male', disability: 'visual impairment' },
    { name: 'Grace Barnes', distance: 11, gender: 'female', disability: 'none' },
    { name: 'Hannah Ross', distance: 9, gender: 'female', disability: 'none' },
    { name: 'Ivan Powell', distance: 7, gender: 'male', disability: 'hearing impairment' },
    { name: 'Jack Bailey', distance: 13, gender: 'male', disability: 'mobility impairment' },
    { name: 'Katie Kelly', distance: 5, gender: 'female', disability: 'none' },
    { name: 'Liam Howard', distance: 2, gender: 'male', disability: 'none' },
    { name: 'Mona Ward', distance: 10, gender: 'female', disability: 'none' },
    { name: 'Nathan Cox', distance: 4, gender: 'male', disability: 'none' },
    { name: 'Olivia Richardson', distance: 6, gender: 'female', disability: 'none' },
    { name: 'Paul Watson', distance: 9, gender: 'male', disability: 'none' },
    { name: 'Quinn James', distance: 8, gender: 'other', disability: 'none' },
    { name: 'Rachel Thompson', distance: 5, gender: 'female', disability: 'none' },
    { name: 'Sam Martinez', distance: 3, gender: 'male', disability: 'none' },
    { name: 'Tina Anderson', distance: 10, gender: 'female', disability: 'none' },
    { name: 'Uma Hernandez', distance: 7, gender: 'female', disability: 'none' },
    { name: 'Victor Moore', distance: 6, gender: 'male', disability: 'none' },
    { name: 'Wendy Jackson', distance: 13, gender: 'female', disability: 'none' },
    { name: 'Xander Martin', distance: 11, gender: 'male', disability: 'none' },
    { name: 'Yara Garcia', distance: 4, gender: 'female', disability: 'none' },
    { name: 'Zack Martinez', distance: 8, gender: 'male', disability: 'none' }
  ];

  const [gender, setGender] = useState('');
  const [distance, setDistance] = useState('');
  const [disability, setDisability] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(originalProfiles);

  const handleSearch = () => {
    let filtered = originalProfiles;

    if (gender) {
      filtered = filtered.filter(profile => profile.gender === gender);
    }
    if (distance) {
      filtered = filtered.filter(profile => profile.distance <= parseInt(distance));
    }
    if (disability) {
      filtered = filtered.filter(profile => profile.disability === disability);
    }

    console.log('Filtered Profiles after search:', filtered);
    setFilteredProfiles(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton}>
        <Image
            style={styles.buttonImage}
            source={require('../../assets/images/output.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton}>
          <Image
            style={styles.buttonImage}
            source={require('../../assets/images/golf-buddies-high-resolution-logo.png')}
          />
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.messageButton}>
        <Image
            style={styles.buttonImage}
            source={require('../../assets/images/pixlr-image-generator-926b590e-9c9c-4a99-b7d9-5343948eb637.png')}
          />
        </TouchableOpacity>
      </View>
      
      
      <View style={styles.content}>
      <View style={styles.profileList}>
        <View style={styles.profileGrid}>
          {filteredProfiles.map((profile, index) => (
            <TouchableOpacity key={index} style={styles.profileItem}>
              <View style={styles.profilePicturePlaceholder} />
              <Text>Name: {profile.name}</Text>
              <Text>Distance: {profile.distance} miles</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      
      <View style={styles.searchBox}>
        <Text style={styles.searchTitle}>Search Preferences</Text>
        <Text>Gender:</Text>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        
        
        <Text>Distance (miles): {distance}</Text>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={distance}
            onValueChange={(value) => setDistance(value)}
        />
        
        
        <Text>Disability:</Text>
        <Picker
          selectedValue={disability}
          style={styles.picker}
          onValueChange={(itemValue) => setDisability(itemValue)}>

          <Picker.Item label="Select Disability" value="" />
          <Picker.Item label="None" value="none" />
          <Picker.Item label="Visual Impairment" value="visual impairment" />
          <Picker.Item label="Hearing Impairment" value="hearing impairment" />
          <Picker.Item label="Mobility Impairment" value="mobility impairment" />
        </Picker>
        
        <Button title="Search" onPress={handleSearch} />
       
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  homeButton: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  messageButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10, // Change this value to adjust the border radius
  },
  buttonText: {
    fontSize: 18,
    color: '#4caf50',
  },
  profileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  spacer: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  profileList: {
    flex: 3,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  profileItem: {
    width: '49%',
    padding: 15,
    backgroundColor: '#e8f5e9',
    marginBottom: 10,
    marginHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c8e6c9',
    alignItems: 'center',
    height: 500, // Adjust this value to make the profile item taller
  },
  profilePicturePlaceholder: {
    width: '95%', // Make it a square that fits the width of the profile item
    height: 420, // Adjust the height to fit within the profile item
    borderRadius: 30,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  searchBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  searchTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4caf50',
  },
  searchInput: {
    height: 40,
    borderColor: '#c8e6c9',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    height: 40,
    marginBottom: 10,
  },
});

export default FindPartner;