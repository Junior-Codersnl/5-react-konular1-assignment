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
Bu lınkteki egsersizleri yaparsak React kod yapısına alışmış oluruz.
[https://www.codecademy.com/learn/react-101]


# 5-react-assignment

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

![ödev 2](https://github.com/Junior-Codersnl/5-react-konular1-assignment/blob/main/assets/exercise2.png)

Bu ödevde, her seferinde farklı bilgileri görüntülemek için yeniden kullanacağınız tek bir component-bileşen oluşturmanız gerekir.

1. `<Guarantee>` adında fonksiyon component oluşturun.
2. Bunu 3 sefer miras alın.
3. Her bir componente 3 `props` verin: `img`, `title` ve `description` adında.
4. Her bileşene uygun içeriği aktarın. Fotoları `assets` klasörünün içinden alın
5. Çalışıp çalışmadığını en üst düzey componente-bileşene aktararak-import ederek test edin, bu durumda bu `<App>` dır.


**Ödev 3: 10'dan daha büyük!**

0'dan sonsuza kadar basit bir sayı sayacı oluşturalım!

1. `<Counter>`, `<Count>` and `<Button>` adlarında 3 fonksiyon component oluşturun.
2. `<Counter>` içinde bir state değişkeni tanımlayın ve onu `count` diye adlandırın (başlangıç değeri `0` olsun) ve bu değişkenin işleyici fonksiyonu `setCount` olsun.
3. `<Button>` içinde bir `<button>` oluştur ve `Add 1!` yaz sonrada ona `onClick` olay-event özelliği-attribute ekle.
4. `count` state değerini `<Count>` a aktar ve `setCount` u da `<Button>` a.
5. `<Counter>` içinde, return ifadesinin üzerinde `feedback` adlı bir değişken belirtin. Bu değişkene üçlü bir operatör(ternary operator) değeri verin: `count` 10'dan büyükse `10'dan daha büyük!` ifadesini görüntülemelidir, aksi takdirde `Saymaya devam et ...` yazdirin
6. `<Counter>` ın çalışıp çalışmadığını en üst düzey componente-bileşene aktararak-import ederek test edin, bu durumda bu `<App>` dır.


# 5-react-kendi başına kod yazma alıştırması
React ile nasıl çalışılacağını öğrenmek, bir kullanıcı arayüzü oluşturmak için temelde farklı bir yaklaşımdır. Bu nedenle çok pratik yapmalıyız!

Aşağıdaki eğitimde bir 'Bütçe Hesaplayıcısı' nın  React da nasıl yazılacağını öğreneceksiniz!

İlk başta karmaşık görünebilir ama endişelenmeyin. Bunun arkasındaki prensibi en iyi şekilde anlamayı hedefleyin. Herhangi bir şüphe duyarsanız: Google araması yapın veya whatsapp gruptan sorabilirsiniz!

Kolay gelsin arkadaşlar!

-   [Bütçe Hesaplayıcısı](https://www.youtube.com/watch?v=f6HYLHrYpGs)
