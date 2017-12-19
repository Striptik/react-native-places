# React-Native-Elements 

Après avoir regardé différentes librairies pour donner du style à une application, 
je me suis orienté vers le choix de (react-native-elements)[https://react-native-training.github.io/react-native-elements/]



#### Style directement appliqué aux composants React-Native


Nous avions le choix entre (Styled Compoments)[https://www.styled-components.com/docs/basics#react-native] et (Glamourous) [https://glamorous.rocks/basics#glamorous-native] qui permettent de styliser directement chacun des composants en écrivant le style.

Glamourous est plus légée que SC après le build car il est mimifié et bundle. Ce qui n'est pas utilisé par les composants est retiré.





La syntaxe de SC se rapproche grandement du CSS et permet pour les personnes à l'aise avec (ce qui n'est pas mon cas), de faire des du CSS directement plutôt que du style orienté React Native.



Les 2 supportent le theming, ce qui est plutot pratique quand nous avons déjà un design créé et qui permet une plus grande personnalisation. 

Dans notre cas cette solution est mauvaise car nous n'avons aucun style à intégrer et il n'y a qu'une seule page donc peu de soucis quant au poids de l'application.

Je vais donc diriger mon choix vers une librairie UI



#### Librairie de composants stylisés

Les 3 autres choix sont donc (Native Base)[https://nativebase.io/] et (React Native Elements)[https://react-native-training.github.io/react-native-elements/] et (React Native Material UI)[https://github.com/xotahal/react-native-material-ui]
 qui fournissent tout deux une librairie de composants à intégrer plutôt que d'utiliser directement les composants de react-native.
 Cela implique donc que l'on prend le style de la librairie.

 C'est parfait pour mon usage sur ce projet car :

  - je suis mauvais en CSS
  - nous n'avons aucun thème à intégrer
  - On se soucie peu du poids étant donné qu'il n'y a qu'une page a désigner



J'ai choisi React Native Elements pour des raisons assez basiques n'ayant pas le temps de faire un benchmark poussé : 


- Design plus intéressant et mon application sera testée sur IOS donc aucune raison d'intégrer du Material Design (Native Base ou react Native Material UI)
- Le moins d'Issues
- Le plus aimé de la communauté, qui explique que Native Base est parfois un peu buggé
- Pas besoin de customization (material UI)
- L'api me parrait plus accessible
(- Le plus d'Icons :) )




### EDIT :

Bon en faite trop de difficulté à faire fonctionner en un temps si cours. Beaucoup de taff pour faire seulement un Input et impossible de binder le texte. En y réfléchissant une seconde fois, trop peu de temps pour intégrer une librairie complète. Les éléments ne sont pas comme ceux présent dans le core de react-native, cela semble puissant mais il faut d'abord prendre ses marques.


