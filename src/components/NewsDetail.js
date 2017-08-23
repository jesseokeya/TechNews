import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const NewsDetail = ({ newsFeed }) => {
  const { title, author, description, url, urlToImage } = newsFeed;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    descriptionContainerStyle,
    descriptionStyle,
    authorStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: urlToImage }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>
            {
              (title.length > 30) ?
              title.substring(0, 30) + '...'
              : title
            }
          </Text>
          <Text style={authorStyle}>{author}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: urlToImage }}
        />
      </CardSection>

      <CardSection style={descriptionContainerStyle}>
        <Text style={descriptionStyle}>{description}</Text>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Read More
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 20
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  descriptionContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionStyle: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 25,
    fontWeight: 'bold'
  },
  authorStyle: {
    fontWeight: 'bold'
  }
};

export default NewsDetail;
