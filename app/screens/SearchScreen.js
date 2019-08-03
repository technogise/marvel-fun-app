import { View, TextInput } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import styles from './styles/SearchScreenStyle';
import List from '../components/List';

const SearchScreen = () => {
  const data = [
    {
      name: 'Iron Cross Army',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      description: ''
    },
    {
      name: 'Iron Fist (Bei Bang-Wen)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/9/20/53176ebd40ad7.jpg',
      description: ''
    },
    {
      name: 'Iron Fist (Danny Rand)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/3/f0/52616788ebc63.jpg',
      description: ''
    },
    {
      name: 'Iron Fist (Orson Randall)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/53176e979cca2.jpg',
      description: ''
    },
    {
      name: 'Iron Fist (Quan Yaozu)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/4/20/53176e89b563e.jpg',
      description: ''
    },
    {
      name: 'Iron Fist (USM)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52321751dffa6.jpg',
      description:
        'Danny is always focused yet relaxed - more Zen-focused than chill surfer dude. But when Danny turns into Iron First, he becomes very rigid with perfect posture. A very Yin/Yang character. \r\n\r\nDanny is THE Danny Rand â€“ the 17-year-old head of the giant Rand Corporation.  His wealth rivals Osbornâ€™s â€“ but youâ€™d never know it from his laid- back attitude. However, as Iron Fist, he takes his powers very seriously. \r\n\r\nWhile Danny and Luke are best friends, Danny has a special respect for Spider-Man, acting as a non-judgmental moral commentator on all of Spider-Manâ€™s actions. '
    },
    {
      name: 'Iron Fist (Wu Ao-Shi)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/7/03/53176f05a6851.jpg',
      description: ''
    },
    {
      name: 'Iron Lad',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/3/50/4c0038c9c6580.jpg',
      description: ''
    },
    {
      name: 'Iron Man',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
      description:
        'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.'
    },
    {
      name: 'Iron Man (Iron Man 3 - The Official Game)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/9/03/5239c1408c936.jpg',
      description: ''
    },
    {
      name: 'Iron Man (LEGO Marvel Super Heroes)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/6/90/5239c3cc8a259.jpg',
      description: ''
    },
    {
      name: 'Iron Man (Marvel Heroes)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/9/40/5239be60a67da.jpg',
      description: ''
    },
    {
      name: 'Iron Man (Marvel War of Heroes)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/f/f0/5239bfbfeea88.jpg',
      description: ''
    },
    {
      name: 'Iron Man (Ultimate)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/1/90/53176e7785d95.jpg',
      description: ''
    },
    {
      name: 'Iron Man/Tony Stark (MAA)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5232190d42df2.jpg',
      description:
        "Tony Stark is the genius inventor/billionaire/philanthropist owner of Stark Industries. With his super high-tech Iron Man suit, he is practically indestructible, able to fly, and has a large selection of weapons to choose from - but it's Tony's quick thinking and ability to adapt and improvise that make him an effective leader of the Avengers.        ",
    },
    {
      name: 'Iron Monger',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      description: ''
    },
    {
      name: 'Iron Patriot',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      description: ''
    },
    {
      name: 'Iron Patriot (James Rhodes)',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/6/70/526035f38cd5d.jpg',
      description:
        'U.S. Air Force pilot and Tony Stark\'s friend who has his own suit of Iron Man armor, nicknamed, "War Machine."',
    },
    {
      name: 'Ironclad',
      thumbnailUrl:
        'http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c0035ccf2128.jpg',
      description: ''
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.searchInput} />
        </View>
        <View style={styles.buttonContainer}>
          <Button>SEARCH</Button>
        </View>
      </View>
      <View style={styles.listContainer}>
        <List data={data} />
      </View>
    </View>
  );
};

export default SearchScreen;
