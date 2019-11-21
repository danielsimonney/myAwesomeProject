/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logout from './public/logout.png';
import Bohnomme from './public/bohnomme.png'
import medicine from './public/medicine.png'
import doctor from './public/doctor.png'
import call from './public/call.png'
import reminder from './public/reminder.png'
import plus from './public/pluz.png'
import phone from './public/phone.png'
import han from './public/brother.jpg'
import leia from './public/sister.jpg'
import padme from './public/mother.jpg'
import vador from './public/father.png'

const contacts = [
  {
    relation: "father",
    name: "Dark Vador",
    img: vador,
  },
  {
    relation: "mother",
    name: "Padme Amidala",
    img: padme,
  },
  {
    relation: "sister",
    name: "Leia Skywalker",
    img: leia,
  },
  {
    relation: "brother in law",
    name: "Han Solo",
    img: han,
  },

]

const days = [
  {
    number: "5",
    day: "Tue",
    style:"normal",
  },
  {
    number: "6",
    day: "Wed",
    style:"green",
  },
  {
    number: "7",
    day: "Fri",
    style:"normal",
  },
  {
    number: "8",
    day: "Sat",
    style:"normal",
  },
  {
    number: "9",
    day: "Sun",
    style:"normal",
  },
]
const rdv=[
  {
    logo:medicine,
    text:'Medicine',
    nbr:"9"

  },
  {
    logo:reminder,
    text:'Medicine',
    nbr:"3"
  },
  {
    logo:doctor,
    text:'Doctor visits',
    nbr:"1"

  },
  {
    logo:call,
    text:'Calls',
    nbr:"3"

  },
]
export default class App extends Component {
  
  render() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <ScrollView>
            <View style={styles.front}>
              <View>
                <Text style={styles.nameUser}>John Doe</Text>
                <Text style={styles.idJohn}>ID: Q1734567891</Text>
              </View>
              <TouchableOpacity>
              <Image source={Logout } style={styles.front_img} />
              </TouchableOpacity>
            </View>         
            <View style={styles.days}>
               {days.map((day ,id) => {
                if ((day.style)=="normal") {
                  return (<View style={styles.normal} key={id}>
                    <Text style={styles.numero}>{day.number}</Text>
                    <Text style={styles.jour}>{day.day}</Text>
                  </View>)
                }else{
                  return (<View style={styles.greenDay} key={id}>
                    <Text style={styles.numeroGreen}>{day.number}</Text>
                    <Text style={styles.jourGreen}>{day.day}</Text>
                  </View>)
                }
              })}
            </View>
            <View style={styles.advice}>
              <Image source={ Bohnomme } style={styles.bonhomme} />
              <Text style={styles.green_text}>Vous avez complété 75% {"\n"} de vos tâches cette semaine</Text>
            </View>
            <View style={styles.dash}>
              <View style={styles.row}>
              {rdv.map((rdv ,id) => {
                  return ( 
                    <View style={styles.block}>
                    <Image source={rdv.logo} style={styles.icon} />
                    <View>
                      <Text style={styles.type}>{rdv.text}</Text>
                      <Text style={styles.notif}>{rdv.nbr} upcomings</Text>
                    </View>
                    
                  </View>
                  )
              })}              
               </View>
              <View style={styles.visit}>
                <Text style={styles.visit_text}>Visites effectuées ce mois-ci</Text>
                <View style={styles.progress_container}>
                  <View style={styles.progress_bar}></View>
                </View>
              </View>

              <View style={styles.family}>
                <View >
                  <Text style={styles.family_title}>Family</Text>
                  <Text style={styles.family_content}>Contact with your family</Text>
                </View>
                <Image source={ plus } style={styles.add}/>
              </View>
              </View>
              <View style={styles.list}>
                <Text style={styles.cat}>All</Text>
                <Text style={styles.cat}>Loved</Text>
                <Text style={styles.cat}>Usefull</Text>
                <Text style={styles.cat}>Close</Text>
              </View>
              <View style={styles.persons}>
              {contacts.map((contact ,id) => {
                return (<View key={id} style={styles.single_contact} >
                  <View style={styles.name_img}>
                      <Image source={contact.img} style={styles.contact_img} />                    
                    <Text style={styles.contact_info}>
                      <Text style={styles.fullname}>{contact.relation}{"\n"}</Text>
                      <Text>{contact.name}</Text>
                    </Text> 
                  </View>
                  <Image source={phone} style={styles.phone} />
              </View>)
              })}
            </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )}
};

const styles = StyleSheet.create({
  myElement: {
    backgroundColor: '#fff',
  },
  nameUser: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center'
  },
  days: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginTop: 30
  },
  normal: {
    width: 55,
    height: 80,
    backgroundColor: '#F9F9F9',
    marginLeft: 18,
    borderRadius: 5,
    shadowColor: '#D9D9D9',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 1,
    shadowRadius: 3
  },
  greenDay:{
    width: 55,
    height: 80,
    backgroundColor: '#28B67B',
    marginLeft: 18,
    borderRadius: 5,
    shadowColor: '#D9D9D9',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 1,
    shadowRadius: 3
  },


  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginLeft: 50,
    marginBottom:40,
    marginTop:25,
  },


  numero: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 20,
    paddingBottom: 16,
    paddingTop: 16
  },
  jour: {
    textAlign:'center',
    paddingBottom: 16,
  },

  numeroGreen:{
    color:'white',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 20,
    paddingBottom: 16,
    paddingTop: 16
  },

  jourGreen:{
    color:'white',
    textAlign:'center',
    paddingBottom: 16,
  },
  advice: {
    flexDirection: 'row',
    backgroundColor: '#28B67B',
    marginTop: 20,
    width: 341,
    height: 50,
    borderRadius: 7,
    alignSelf: 'center',
    top: 25,
    zIndex:2
  },
  bonhomme: {
    bottom: 33
  },
  green_text: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 20,
    fontSize: 12
  },
  front:{
    flexDirection: 'row',
    paddingLeft: '35%'
  },
  front_img: {
    alignSelf: 'center',
    width: 40,
    marginLeft: '30%'
  },
  dash: {
    backgroundColor: '#EBF3EC',
    paddingTop:40,
    
  },
  idJohn: {
    fontSize: 15,
    color:'#D9D9D9',
    textAlign:'center'
  },
  block: {
    width: 138,
    height: 167,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight:10,
    justifyContent:'space-around'
  },
  icon: {
    marginLeft:10,
  },

  type: {
    paddingLeft: 10,
    fontSize: 20,
    paddingTop: 20
  },
  notif: {
    color: '#9F9F9F',
    paddingLeft: 10,
    paddingTop:5
  },
  visit: {
    backgroundColor: '#28B67B',
    width: 341,
    height: 60,
    borderRadius: 7,
    alignSelf: 'center',
  },
  visit_text: {
    color: '#fff',
    marginLeft: 20,
    fontSize: 12,
    paddingTop: 10
  },
  add: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    alignSelf: 'center'
    
  },
  persons: {
    paddingLeft: 30,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10
  },
  family: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  family_title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  family_content: {
    color: '#A4A8AC',
    paddingTop: 5
  },
  cat: {
    color: '#A4A8AC',
    fontWeight: 'bold'
  },
  contact_img: {
    width: 30,
    height: 30,
    borderRadius:80
  },

  name_img: {
    flexDirection: 'row',
  },
  contact_info: {
    alignSelf: 'center',
    paddingLeft: 10
  },
  fullname: {
    color: '#A4A8AC'
  },
  phone: {
    alignSelf: 'center',
    width: 25,
    height: 25,
  },
  single_contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2'
  },
  progress_container: {
    height: 4,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 10
  },
  progress_bar: {
    height: 4,
    width: '70%',
    backgroundColor: '#FACE3E',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 7,
    marginTop:20,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2'
  },
});

