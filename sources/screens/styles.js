import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#f2f2f2',
    alignItems:'center',
    paddingVertical:height*.05
  },
  searchCont:{
    width:width*.9,
    backgroundColor:'#ebebeb',
    borderRadius:width*.01,
    borderColor:'rgba(0.1412, 0.1412, 0.1412, 0.25)',
    borderWidth:1,
    paddingHorizontal:width*.05,
    color:'#242424',
  },
  resultWrapper:{
    backgroundColor:'#fAfAfA',
    position:'absolute',
    top:height*.12,
    zIndex:9,
  },
  resultCont:{
    alignItems:'center',
    textAlign:'center',
    borderRadius:width*.03,
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    borderBottomWidth:1,
    fontSize:width*.06,
    width:width*.8,
    paddingVertical:height*.008,
    zIndex:10,
  },
  resultText:{
    color:'#2C2C2C',
  },
  favoriteWrapper:{
    width:width,
    alignItems:'center',
    justifyContent:'center',
    marginTop:height*.022
  },
  favoriteIcon:{
    width:80,
    height:80,
  },
  favoriteCont:{
    width:width*.9,
    borderRadius:width*.03,
    backgroundColor:'white',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:'4%',
    justifyContent:'space-between'
  },
  favoriteCity:{
    color:'#2c2c2c',
    fontWeight:'bold',    
  },
  favoriteCondition:{
    color:'#2c2c2c',
    fontWeight:'200',
  },
  favoriteTemperature:{
    color:'#2c2c2c',
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    width:width*.85,
    marginBottom:height*.05
  },
  headerText:{
    color:'#2c2c2c',
    fontWeight:'900',
    fontSize:20,
    marginLeft:width*.05
  },
  seperator:{
    height:12,
  }
})
