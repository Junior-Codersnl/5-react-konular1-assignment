# 5 REACT JS

![react gif](https://miro.medium.com/max/574/1*qVPbRqzVzWF9gSjZ8P0C8w.gif)


* React eğitimine başlamadan önce kurulması gerekenler [link](https://www.youtube.com/watch?v=pOE47x-aubg&list=PLqG356ExoxZXEW9h1uTWCwqLLTJ_bO5Be&index=2&ab_channel=EnginDemiro%C4%9F)

* Tavsiye edilen eklentiler [Vs ekletileri](https://www.youtube.com/watch?v=EwXw1dp6AyM&list=PLqG356ExoxZXEW9h1uTWCwqLLTJ_bO5Be&index=3&ab_channel=EnginDemiro%C4%9F) , [Chrome eklentileri 1](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) , [Chrome eklentileri 2](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) , [Chrome eklentileri 3](https://chrome.google.com/webstore/detail/react-sight/aalppolilappfakpmdfdkpppdnhpgifn)

* React genel bilgi [slide linki](http://slides.com/volkansengul/reactjs-giris/fullscreen)

* React resmi sitesi [turkce dokumani](https://tr.reactjs.org/docs/getting-started.html)

* Reactjs ile yapılmış populer web uygulamaları [link](https://medium.com/@coderacademy/32-sites-built-with-reactjs-172e3a4bed81)

* React İçin Gerekli Javascript Özellikleri [Video Serisi](https://www.youtube.com/watch?v=qXoMVJAyKUE&list=PL8IHDq7oEkgGuhjVN2_lr1F8bmEgdetXy&ab_channel=ReactDersleri)



## Konular 1. Hafta

1. React.js nedir?   [okuma link](https://www.hostinger.web.tr/rehberler/react-nedir/) ,  [video link](https://www.youtube.com/watch?v=EAbzuHG9glw&ab_channel=AliOsmanHaz%C4%B1r)
   - Component, State & Props  [okuma link](https://www.mobilhanem.com/reactjs-component-yapisi-ve-component-kullanimi/), [video 1](https://www.youtube.com/watch?v=jgOhoPrNzMM&t=14s&ab_channel=Yaz%C4%B1l%C4%B1mBilimi) , [video 2](https://www.youtube.com/watch?v=oQJZxyd71V4&list=PL8IHDq7oEkgFKYIoNuubfZMuhhgEukkAg&index=3&ab_channel=ReactDersleri)
   - Lifecycle [okuma linki](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/), [video 1](https://www.youtube.com/watch?v=X_Yhd98twnw&list=PL8IHDq7oEkgFKYIoNuubfZMuhhgEukkAg&index=4&ab_channel=ReactDersleri),[video 2](https://www.youtube.com/watch?v=VqSJvy8ZX5M&list=PL8IHDq7oEkgFKYIoNuubfZMuhhgEukkAg&index=2&ab_channel=ReactDersleri)
   
2. JS de HTML: JSX
   - JSX    [okuma linki](https://tr.reactjs.org/docs/introducing-jsx.html),  [video linki](https://www.youtube.com/watch?v=EoH-TliTV1Y&list=PL8IHDq7oEkgFKYIoNuubfZMuhhgEukkAg&ab_channel=ReactDersleri)
3. Props
   - data akişı [https://medium.com/kodcular/react-componentleri-aras%C4%B1-prop-ge%C3%A7i%C5%9Fi-a1462ddeac52]
4. Static siteyi yayımlama
   - Static site nedir? [okuma link](http://www.hanebilgisayar.com/web-sitesi/statik-web-sitesi-nedir/)
   - Deploy kaynakları [heroku, netlify, vercel, firebase,AWS, Azure] -(Derste örnek gösterilecek firebase console uye olunup gelelim)

                   


## React kod egsersizi

[Bu lınkteki](https://www.codecademy.com/learn/react-101) egsersizleri yaparsak React kod yapısına alışmış oluruz.



## React Assignment

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


## React kendi başına kod yazma alıştırması

React ile nasıl çalışılacağını öğrenmek, bir kullanıcı arayüzü oluşturmak için temelde farklı bir yaklaşımdır. Bu nedenle çok pratik yapmalıyız!

Aşağıdaki eğitimde bir 'Bütçe Hesaplayıcısı' nın  React da nasıl yazılacağını öğreneceksiniz!

İlk başta karmaşık görünebilir ama endişelenmeyin. Bunun arkasındaki prensibi en iyi şekilde anlamayı hedefleyin. Herhangi bir şüphe duyarsanız: Google araması yapın veya whatsapp gruptan sorabilirsiniz!

Kolay gelsin arkadaşlar!

-   [Bütçe Hesaplayıcısı](https://www.youtube.com/watch?v=f6HYLHrYpGs)
