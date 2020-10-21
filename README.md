# 5-react-konular1- materyal

1. React.js nedir? [https://www.hostinger.web.tr/rehberler/react-nedir/]
   - Component, State & Props  [https://www.mobilhanem.com/reactjs-component-yapisi-ve-component-kullanimi/]
   - Lifecycle [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
2. JS de HTML: JSX
   - JSX [https://tr.reactjs.org/docs/introducing-jsx.html]
3. Props
   - data akişı [https://medium.com/kodcular/react-componentleri-aras%C4%B1-prop-ge%C3%A7i%C5%9Fi-a1462ddeac52]
4. Static siteyi yayımlama
   - Static site nedir? [http://www.hanebilgisayar.com/web-sitesi/statik-web-sitesi-nedir/]
   - Deploy kaynakları [heroku, netlify, vercel, firebase,AWS, Azure]

react genel slide [http://slides.com/volkansengul/reactjs-giris/fullscreen]                     
tavsiye chrome eklenti [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi]
react turkce dokumani [https://tr.reactjs.org/docs/getting-started.html]

# 5-react-egsersiz

[https://www.codecademy.com/learn/react-101]

# 5-react-assignment

https://raw.githubusercontent.com/HackYourFuture/React/master/week1/assets/exercises/exercise2.png


**Ödev 1: Hobiler**

```js
const hobiler = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
```

1. 2 fonksiyon component oluşturun: `<HobbyList>` ve `<Hobbies>`
2. `hobiler` değişkenini `<HobbyList>` componenti içine ekleyin
3. `<Hobbies>` örneklerini döndürmek için `<HobbyList>` içindeki `return` ifadesinde  `map()` fonksiyonu kullanın
4. hobiyi `prop` olarak parent-üst componetten child-alt componente aktarın (`key` eklemeyi unutmayın)
5. Çalışıp çalışmadığını en üst düzey componente-bileşene aktararak-import ederek test edin, bu durumda bu `<App>` dır.

**Ödev 2: Müşteri Hizmetleri!**

![ödev 2](assets/exercises/exercise2.png)

Bu ödevde, her seferinde farklı bilgileri görüntülemek için yeniden kullanacağınız tek bir component-bileşen oluşturmanız gerekir.

1. Create a functional component called `<Guarantee>`
2. Instantiate it 3 times
3. Give each component 3 `props`: an `img`, `title` and `description`
4. Pass down to each component the appropriate content. Take the images from the **assets** folder, inside the **exercise1** folder
5. Test out if it works by importing it into the top level component, which is `<App>`

**Exercise 3: It's higher than 10!**

Let's create a simple number counter, starting from 0 until infinity!

1. Create 3 functional components called `<Counter>`, `<Count>` and `<Button>`
2. Inside `<Counter>` define a state variable called `count` (initialized with value `0`) and state handler called `setCount`
3. Inside `<Button>` create a `<button>` with the text `Add 1!` and `onClick` attribute
4. Pass down the `count` state variable to `<Count>`, and the `setCount` to `<Button>`
5. Inside `<Counter>`, declare a variable called `feedback` above the return statement. Give this variable a ternary operator value: if `count` is higher than 10 it should display the string `"It's higher than 10!"`, else it displays `"Keep counting..."`
6.  5. Test out if it works by importing `<Counter>` into the top level component, which is `<App>`

## **3. Code along**

> Create a new GitHub repository for this project. It's a portfolio piece!

Learning how to work with React is a fundamentally different approach to building a user interface. Therefore, we need to practice a lot!

In the following tutorial you'll learn how to a `Budget Calculator`!

It might seem complicated at first, but don't worry. Aim for understanding the principle behind it to the best you can. If you ever feel in doubt: do a Google search or ask a question in Slack!

Enjoy!

-   [Build a Budget Calculator](https://www.youtube.com/watch?v=f6HYLHrYpGs)
