import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image , ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';
import { Header } from '../../components/header';
import {IconButton } from '../../components/iconButton';

export const TermsAndConditions= ({navigation, screenName}) =>{
    function renderHeader() {
        return(
          <Header

        title="Privacy Policy"
        titleStyle={{
            fontWeight:'bold',
            fontSize:15,
            color:COLORS.blue,
        }}
        containerStyle={{
            height:50,
            marginHorizontal:SIZES.padding,
            marginTop:30,
            right:20,
            backgroundColor:COLORS.white,
            
        }}
      leftComponent={
          <IconButton 
          icon={icons.back}
          containerStyle={{
              width:50,
              height:50,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:COLORS.white,
          }}
        iconStyle={{
            tintColor:'black'
        }}
        onPress={()=>navigation.goBack()}
          />
      }
        />)
    }
  function renderPara(){
    return(<View style={{
        padding:10,
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Privacy Policy</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>This Privacy Policy governs the manner in which KeyStore collects, 
uses, maintains and discloses information collected from users (each, a “User”) 
of the http://www.keystore.co.uk website (“Site”). This privacy policy applies to the Site and all 
products and services offered by KeyStore website.
</Text>

</View>

<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Personal identification information</Text>
<View>
<Text  style={{
    color:COLORS.gray,
    fontSize:17,
}}>
Under the EU’s General Data Protection Regulation (GDPR) personal data is defined as: 
“any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person”.
  </Text>
</View>
<Text style={{
    color:'transparent'
}}>dummy Text</Text>
<View>
<Text  style={{
    color:COLORS.gray,
    fontSize:17,
}}>
We may collect personal identification information from Users in a variety of ways, including,
 but not limited to, when Users visit our site, fill out a form, and in connection with other activities
 , services, features or resources we make available on our Site. 
 Users may visit our Site anonymously. We will collect personal 
 identification information from Users only if they voluntarily submit such information to us.
  Users can always refuse to supply personally identification information, except that it may prevent 
  them from engaging in certain Site related activities.
  </Text>
</View>
<Text  style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>
Non-personal identification information
</Text>
<View>
<Text  style={{
    color:COLORS.gray,
    fontSize:17,
}}>
We may collect non-personal identification information about Users whenever they 
interact with our Site. Non-personal identification information may include the browser name,
 the type of computer and technical information about Users means of connection to our Site, such 
 as the operating system and the Internet service providers utilized and other similar information.
 </Text>
 </View>
 <Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>
Web browser cookies
</Text>
<View>
    <Text style={{
    color:COLORS.gray,
    fontSize:17,
}} >
Our Site may use “cookies” to enhance User experience. 
User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes
 to track information about them. User may choose to set their web browser to refuse cookies, or to 
 alert you when cookies are being sent. If they do so, note that some parts of the Site may not function.
 properly.
 </Text> 
</View>
<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>How we use collected information</Text>
        <Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>KeyStore may collect and use Users personal information for the following purposes:</Text>
<View>
    <View style={{
        flexDirection:'row'
    }}>
 <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 <Text style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>To improve customer service Information you provide helps
    us respond to your customer service requests
     and support needs more efficiently.</Text>
     </View>
     <View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
 To improve our Site
We may use feedback you provide to improve our products and services.
</Text>
</View>
<View style={{
    flexDirection:'row',
}}>
<Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text>
 <Text style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}> To send periodic email
We may use the email address to respond to their enquiries, questions, and/or other requests.
</Text>
</View>
</View>
<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>How we protect your information</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password,
 transaction information and data stored on our Site. 
 We do not store customer credit card details.
</Text>
</View>

<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Sharing your personal information</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>We do not sell, trade, or rent Users personal identification information to others. 
We may share generic aggregated demographic information not linked to any personal identification 
information regarding visitors and users with our business partners, trusted affiliates and advertisers
for the purposes outlined above.


</Text>
</View>

<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Third party websites</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>Users may find advertising or other content on our Site that link to the 
sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites
 which have a link to our Site, is subject to that website’s own terms and policies.
</Text>
</View>

<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Access to information</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>At your request, keyStore can confirm what information we hold about you and how it is processed. If KeyStore does hold personal data about
 you, you can request the following information:
</Text>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
 Our identity and contact details
</Text>
</View>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    paddingRight:25,
    paddingLeft:10,
    paddingBottom:10,
}}>
 Contact details of the data protection officer
</Text>
</View>

<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    paddingRight:20,
    paddingLeft:10,
    paddingBottom:10,
    paddingLeft:10,
}}>
The purpose of the processing as well as the legal basis for processing.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
The categories of personal data collected, stored and processed.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
 Recipient(s) or categories of recipients that the data is/will be disclosed to.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    paddingRight:20,
    paddingLeft:10,
    paddingBottom:10,
    paddingLeft:10,
}}>
 If we intend to transfer the personal data to a third country or
international organisation, information about how we ensure this is done securely. The EU has approved sending personal data to some countries because they meet a minimum standard of data protection. In other cases, we will 
 ensure there are specific measures in place to secure your information.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
How long the data will be stored.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
Details of your rights to correct, erase, restrict or object to such processing.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
Information about your right to withdraw consent at any time.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
How to lodge a complaint with the supervisory authority.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    paddingRight:20,
    paddingLeft:10,
    paddingBottom:10,
    
}}>
Whether the provision of personal data is a statutory or contractual requirement, or a requirement necessary to enter into a contract, as well as whether you are obliged to provide the personal 
data and the possible consequences of failing to provide such data.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    padding:10,
}}>
The source of personal data if it wasn’t collected directly from you.
</Text>
</View>
<View style={{
        flexDirection:'row',
     }}>
     <Text style={{
    color:COLORS.gray,
    fontSize:9,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
 }}>●</Text> 
 
    <Text    style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
    paddingRight:20,
    paddingLeft:10,
    paddingBottom:10,
    paddingLeft:10,
}}>
Any details and information of automated decision making, such as profiling, and any meaningful information about the 
logic involved, as well as the significance and expected consequences of such processing.
</Text>
</View>
<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Your rights</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes.
 You can exercise your right to prevent such processing by refusing your consent at the time 
 of collection or at any other time by contacting us at filshill@filshill.co.uk
 </Text>
 <Text style={{
    color:'transparent'
 }}>Dummy tetx</Text>
 <Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>
Our site may, from time to time, contain links to and from
 the websites of affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
</Text>

</View>
<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Transferring your information outside of Europe</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>As part of the services offered to you through this website, the information 
which you provide to us may be transferred to countries outside the European Union (“EU”).
 By way of example, this may happen if any of our servers are from time to time located in a 
 country outside of the EU. These countries may not have similar data protection laws to the UK. 
 By submitting your personal data, you’re agreeing to this transfer, storing or processing. 
 If we transfer your information outside of the EU in this way, we will take steps to ensure
  that appropriate security measures are taken with the aim of ensuring that your privacy rights 
  continue to be protected as outlined in this Policy.
</Text>
<Text style={{
    color:'transparent'
}}>Dummy Text</Text>
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>
If you use our services while you are outside the EU, your information may be transferred outside the EU in order to provide you with those services.
</Text>

</View>
<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Right to erasure</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>Visitors / users of the site have the ability to have all records of their personal 
data held by a business erased where there is no legitimate reason for that business 
to maintain they records. This includes where GDPR is super-ceded by other laws governing the details
obtained. If you want to request that your data is erased please write to:
</Text>
<Text style={{
    color:'transparent'
}}>Dummy Text</Text>
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>
J.W. Filshill International Ltd
</Text>
<Text  style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
}}>
Ainslie Avenue, Hillington, Glasgow
</Text>
<Text  style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
}}>
G52 4HE, Scotland, UK.
</Text>


</View>
<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Changes to this privacy policy</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>Keystore has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review 
this privacy policy periodically and become aware of modifications.
</Text>

</View>
<Text style={{
            fontSize:20,
            fontWeight:'bold', 
            color:COLORS.blue,
            paddingBottom:10,
        }}>Contact details of the GDPR owner (Keystore):</Text>
        <View style={{
        }}>
            
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
</Text>
<Text style={{
    color:'transparent'
}}>Dummy Text</Text>
<Text style={{
    color:COLORS.gray,
    fontSize:17,
}}>
J.W. Filshill International Ltd
</Text>
<Text  style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
}}>
Ainslie Avenue, Hillington, Glasgow
</Text>
<Text  style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
}}>
G52 4HE, Scotland, UK.
</Text>

<Text  style={{
    color:COLORS.gray,
    fontSize:17,
    paddingTop:5,
}}>
    May 2018.
</Text>
</View>
    </View>)
  }
return(<View style={styles.mainContainer}>

   {renderHeader()}
   <ScrollView>
    <View style={{
        flex:1, 
         backgroundColor:COLORS.white,
        paddingTop:45,
    }}>
     
    {renderPara()}
    <TouchableOpacity
     onPress={()=>navigation.navigate('NewsLetter')}>
  <Text style={{
    fontSize:15,
    fontWeight:'bold',
    color:COLORS.blue,
    paddingLeft:10,
  }}>Get Our NewsLetter!</Text>
  </TouchableOpacity>
    </View>
    </ScrollView>
</View>)
}
const styles = StyleSheet.create({
    mainContainer:{
    flex:1, backgroundColor:COLORS.white,
    },
    TextHeading:{
 fontWeight:'bold',
        fontSize:19,
        alignSelf:'center',
      },
      button:{
      height:10,
      width:10,
      backgroundColor:COLORS.black,
      },
});