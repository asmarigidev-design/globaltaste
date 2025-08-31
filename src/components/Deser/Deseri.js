import { React } from 'react';import { useTranslation } from 'react-i18next';  




//از زیر مجموعه های کارت دسر که چهار منو دارد
//From the Deseri Card sub-sets which has four menus

const Deseri = () => {   
  const { i18n } = useTranslation();  


 
  const currentLanguage = i18n.language; // Get the current language  

  return (  
    <section id="deseri">  
      <div className='deseri'>  
        <div className='titlee'>  
          <h1>{currentLanguage === 'fa' ? 'دسرایرانی' : currentLanguage === 'en' ? 'Desserts Iranian' : 'الحلويات الإيرانية'}</h1>  
        </div>  
      </div>  

      <p id="ghotab">  
        {currentLanguage === 'fa' && <><h1>قطاب عسلی</h1> یکی از دسرهای خوشمزه و ساده ای که در زمان کوتاهی می توانید تهیه کنید و در مهمانی های خود و یا به عنوان میان وعده یا عصرانه آن را میل کنید قطاب عسلی است که مربوط به شهرستان خلخال می باشد.</>}  
        {currentLanguage === 'en' && <><h1>Qatab Asali</h1> One of the delicious and simple desserts that you can prepare in a short time and serve at your parties or enjoy as a snack or tea time is Qatab Asali, which originates from the city of Khalkhal.</>}  
        {currentLanguage === 'ar' && <><h1>قطاب بالعسل</h1> واحدة من الحلويات الشهية والبسيطة التي يمكنك تحضيرها في وقت قصير وتقديمها في حفلاتك أو الاستمتاع بها كوجبة خفيفة أو في وقت الشاي هي قطاب بالعسل، الذي يعود أصله إلى مدينة خلخال.</>}  
        <br />  
        {currentLanguage === 'fa' && <>در ادامه مواد لازم برای تهیه خمیر قطاب عسلی و همچنین مواد لازم برای تهیه مغز قطاب عسلی را به شما آموزش می دهیم</>}  
        {currentLanguage === 'en' && <>We will also teach you the ingredients needed to prepare the dough for Qatab Asali and the filling ingredients.</>}  
        {currentLanguage === 'ar' && <>سنعلمك أيضًا المكونات اللازمة لتحضير العجينة للقطاب بالعسل ومكونات الحشوة.</>}  
        <br />  

        <table className="styled-table">  
          <thead>  
            <tr>  
              <th>{currentLanguage === 'fa' ? 'مواد لازم برای تهیه خمیر قطاب عسلی خلخال' : currentLanguage === 'en' ? 'Ingredients for Khalkhali Qatab Dough' : 'المواد اللازمة لعجينة القطاب خلخالي'}</th>  
              <th>{currentLanguage === 'fa' ? 'مقدار' : currentLanguage === 'en' ? 'Amount' : 'الكمية'}</th>  
            </tr>  
          </thead>  
          <tbody>  
            <tr>  
              <td>{currentLanguage === 'fa' ? 'زرده تخم مرغ:' : currentLanguage === 'en' ? 'Egg yolks:' : 'صفار البيض:'}</td>  

              <td>3 </td>  
            </tr>  
            <tr>  
              <td>{currentLanguage === 'fa' ? 'ماست:' : currentLanguage === 'en' ? 'Yogurt:' : 'زبادي:'}</td>  
              <td>{currentLanguage === 'fa' && "150 گرم"}  
          {currentLanguage === 'en' && "150 grams"}  
          {currentLanguage === 'ar' && "150 جرام"}  
      </td>              </tr>  
            <tr>  
              <td>{currentLanguage === 'fa' ? 'آرد سفید:' : currentLanguage === 'en' ? 'White flour:' : 'الدقيق الأبيض:'}</td>  
              <td>{currentLanguage === 'fa' && "250 گرم"}  
          {currentLanguage === 'en' && "250 grams"}  
          {currentLanguage === 'ar' && "250 جرام"}  
      </td>              </tr>  
            <tr>  
              <td>{currentLanguage === 'fa' ? 'روغن:' : currentLanguage === 'en' ? 'Oil:' : 'زيت:'}</td>  
              <td>{currentLanguage === 'fa' && "150 گرم"}  
          {currentLanguage === 'en' && "150 grams"}  
          {currentLanguage === 'ar' && "150 جرام"}  
      </td>                </tr>  
              <tr> 
              <td>{currentLanguage === 'en' ? 'Oil:' : currentLanguage === 'ar' ? 'زيت:' : 'روغن:'}</td>  
              <td>{currentLanguage === 'fa' && "150 گرم"}  
          {currentLanguage === 'en' && "150 grams"}  
          {currentLanguage === 'ar' && "150 جرام"}  
      </td>              </tr>  
            <tr>  
              <td>{currentLanguage === 'fa' ? 'بیکینگ پودر:' : currentLanguage === 'en' ? 'Baking powder:' : 'مسحوق الخبز:'}</td>  
              <td>{currentLanguage === 'fa' && "1 قاشق غذاخوری"}  
          {currentLanguage === 'en' && "1 tablespoons"}  
          {currentLanguage === 'ar' && "1 ملعقة كبيرة"}  
      </td>             </tr>  
          </tbody>  
        </table> 
  <br />  
  <table className="styled-table">  
  <thead>  
    <tr>  
      <th>{currentLanguage === 'fa' && "مواد لازم برای تهیه مغز قطاب عسلی"}  
          {currentLanguage === 'en' && "Ingredients for the Filling of Qatab Asali"}  
          {currentLanguage === 'ar' && "مكونات الحشوة للقطاب بالعسل"}  
      </th>  
      <th>{currentLanguage === 'fa' && "مقدار"}  
          {currentLanguage === 'en' && "Amount"}  
          {currentLanguage === 'ar' && "الكمية"}  
      </th>  
    </tr>  
  </thead>  
  <tbody>  
    <tr>  
      <td>{currentLanguage === 'fa' && "مغز گردوی پودر شده:"}  
          {currentLanguage === 'en' && "Ground walnut:"}  
          {currentLanguage === 'ar' && "جوز مطحون:"}  
      </td>  
      <td>{currentLanguage === 'fa' && "150 گرم"}  
          {currentLanguage === 'en' && "150 grams"}  
          {currentLanguage === 'ar' && "150 جرام"}  
      </td>  
    </tr>  
    <tr>  
      <td>{currentLanguage === 'fa' && "پودر شکر:"}  
          {currentLanguage === 'en' && "Powdered sugar:"}  
          {currentLanguage === 'ar' && "سكر بودرة:"}  
      </td>  
      <td>{currentLanguage === 'fa' && "150 گرم"}  
          {currentLanguage === 'en' && "150 grams"}  
          {currentLanguage === 'ar' && "150 جرام"}  
      </td>  
    </tr>  
    <tr>  
      <td>{currentLanguage === 'fa' && "عسل:"}  
          {currentLanguage === 'en' && "Honey:"}  
          {currentLanguage === 'ar' && "عسل:"}  
      </td>  
      <td>{currentLanguage === 'fa' && "2 قاشق غذاخوری"}  
          {currentLanguage === 'en' && "2 tablespoons"}  
          {currentLanguage === 'ar' && "2 ملعقة كبيرة"}  
      </td>  
    </tr>  
    <tr>  
      <td>{currentLanguage === 'fa' && "گلاب:"}  
          {currentLanguage === 'en' && "Rose water:"}  
          {currentLanguage === 'ar' && "ماء ورد:"}  
      </td>  
      <td>{currentLanguage === 'fa' && "نیم استکان"}  
          {currentLanguage === 'en' && "Half a glass"}  
          {currentLanguage === 'ar' && "نصف كأس"}  
      </td>  
    </tr>  
    <tr>  
      <td>{currentLanguage === 'fa' && "هل آسیاب شده:"}  
          {currentLanguage === 'en' && "Ground cardamom:"}  
          {currentLanguage === 'ar' && "هيل مطحون:"}  
      </td>  
      <td>{currentLanguage === 'fa' && "1 قاشق غذاخوری"}  
          {currentLanguage === 'en' && "1 tablespoon"}  
          {currentLanguage === 'ar' && "1 ملعقة كبيرة"}  
      </td>  
    </tr>  
    <tr>  
      <td>{currentLanguage === 'fa' && "پودر دارچین:"}  
          {currentLanguage === 'en' && "Cinnamon powder:"}  
          {currentLanguage === 'ar' && "بودرة قرفة:"}  
      </td>  
      <td>{currentLanguage === 'fa' && "1 قاشق غذاخوری"}  
          {currentLanguage === 'en' && "1 tablespoon"}  
          {currentLanguage === 'ar' && "1 ملعقة كبيرة"}  
      </td>  
    </tr>  
    <tr>  
      <td>{currentLanguage === 'fa' && "پودر میخک:"}  
          {currentLanguage === 'en' && "Clove powder:"}  
          {currentLanguage === 'ar' && "بودرة قرنفل:"}  
      </td>  
      <td>{currentLanguage === 'fa' && "1 قاشق چایخوری"}  
          {currentLanguage === 'en' && "1 teaspoon"}  
          {currentLanguage === 'ar' && "1 ملعقة صغيرة"}  
      </td>  
    </tr>  
  </tbody>  
</table>
  <h2> 
 {currentLanguage === 'fa' && <>طرزتهیه قطاب عسلی</>}  
 {currentLanguage === 'en' && <>How to Prepare Qatab Asali</>}  
 {currentLanguage === 'ar' && <> كيفية تحضير قطاب بالعسل </>}  
 </h2>
  <br />  
  {currentLanguage === 'fa' && <>برای تهیه قطاب عسلی باید در اولین مرحله آرد را الک کنید و در گوشه ای بگذارید و بعد یک کاسه بزرگ برداشته و موادی که اشاره کردیم را داخل آن بریزید و با هم مخلوط کنید.
پس از آن آرد الک شده را هم به مواد اضافه کنید و هم بزنید تا کاملاً ترکیب شوند و یک خمیر نرم و یکدستی حاصل شود. توجه داشته باشید که میزان آرد باید به قدری باشد که خمیر شما چسبناک نباشد.
در مرحله بعدی باید خمیر را روی یک سطح صاف بگذارید و با وردنه آن را پهن و نازک کنید تا به ضخامت 3 میلی متر برسد و با یک قالب گرد و یا با دهانه استکان و لیوان خمیرها را برش بزنید.
سپس موادی که برای میانه قطاب آماده کرده بودید را در بین خمیر ها بگذارید و آن را از وسط تا کرده و لبه ها را با دست به هم بچسبانید تا مواد داخل قطاب بیرون نریزد.
حالا باید سینی فر را با کمک کاغذ روغنی بپوشانید و قطاب ها را داخل آن قرار دهید و 20 دقیقه داخل فر با دمای 220 درجه قرار بدهید تا بپزند.
در همین حین عسل را هم در یک قابلمه کوچک ریخته و روی شعله گاز با حرارت ملایم بگذارید تا روان تر شود.
بعد از اینکه قطاب‌ها طلایی رنگ شدند، آنها را از فر بیرون بیاورید و درون عسل داغ بگذارید تا 2 دقیقه بماند و عسل ها را به خود جذب کند و آنها را بیرون آورده و درون صافی بگذارید که عسل اضافه خارج شود. برای تزئین قطاب ها می توانید کمی خاک قند روی آنها الک کنید.</>}  
  {currentLanguage === 'en' && <>To prepare honey qatab, you must sift the flour in the first step and put it in a corner, then take a big bowl and pour the ingredients we have mentioned into it and mix together.
After that, add the sifted flour to the ingredients and stir until they are completely combined and a smooth and uniform dough is obtained. Note that the amount of flour should be enough so that your dough is not sticky.
In the next step, you should put the dough on a flat surface and spread it with a rolling pin until it reaches a thickness of 3 mm and cut the dough with a round mold or with the opening of a glass or glass.
Then put the ingredients you have prepared for the middle of the qatab between the doughs and fold it in half and stick the edges together with your hands so that the ingredients inside the qatab do not spill out.
Now you have to cover the oven tray with oil paper and put the qatabs inside and put it in the oven at 220 degrees for 20 minutes to cook.
In the meantime, pour honey in a small pot and put it on a gas flame with low heat until it becomes smoother.
After the qatabs are golden, take them out of the oven and put them in hot honey for 2 minutes to absorb the honeys, then take them out and put them in a strainer to remove the excess honey. To decorate the qatabs, you can sift a little sugar dust on them.</>}  
  {currentLanguage === 'ar' && <>لتحضير عسل القطاب يجب نخل الدقيق في الخطوة الأولى ووضعه في الزاوية، ثم نأخذ وعاءً كبيراً ونسكب فيه المكونات التي ذكرناها ونخلطها معاً.
بعد ذلك، يضاف الدقيق المنخول إلى المكونات ويقلب حتى تمتزج تماماً ويتم الحصول على عجينة ناعمة ومتجانسة. لاحظ أن كمية الدقيق يجب أن تكون كافية حتى لا تلتصق العجينة.
في الخطوة التالية عليك وضع العجينة على سطح مستوٍ وتدليكها بالنشابة حتى تصل إلى سمك 3 مم وتقطيع العجينة بقالب دائري أو بفتحة كوب أو كوب زجاجي.
ثم ضعي المكونات التي أعددتها لوسط القطاب بين العجينتين ثم اطويه من المنتصف وألصقي الأطراف ببعضها بيديك حتى لا تتسرب المكونات الموجودة داخل القطاب.
الآن عليك أن تغطى صينية الفرن بورق الزيت وتضع القطاب بداخلها وتضعها في الفرن على حرارة 220 درجة لمدة 20 دقيقة لتنضج.
في هذه الأثناء، اسكبي العسل في قدر صغير وضعيه على نار الغاز على نار خفيفة حتى يصبح أكثر نعومة.
بعد أن يصبح لون القطاب ذهبي اللون، نخرجها من الفرن ونضعها في العسل الساخن لمدة دقيقتين ليمتص العسل، ثم نخرجها ونضعها في مصفاة للتخلص من العسل الزائد. لتزيين القطاب، يمكنك نخل القليل من غبار السكر عليها.</>}  
  <br />
  </p>
  {currentLanguage === 'fa' && (
          <>
            <h1>شله زرد</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>مواد لازم برای تهیه شله زرد</th>
                  <th>مقدار</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>برنج خیس کرده:</td><td>2 پیمانه</td></tr>
                <tr><td>شکر:</td><td>4 پیمانه</td></tr>
                <tr><td>کره:</td><td>50 گرم</td></tr>
                <tr><td>زعفران:</td><td>1 مثقال</td></tr>
                <tr><td>روغن:</td><td>1 قاشق غذاخوری</td></tr>
                <tr><td>خلال پسته و بادام:</td><td>به مقدار لازم</td></tr>
              </tbody>
            </table>
            <br />
            <p>طرز تهیه شله زرد: برنج را به مقداری که گفته شد به خوبی شسته و حدود سه ساعت در آب گرم بخیسانید. بعد از آن آب برنج را خالی کرده و حدود 6 پیمانه آب برای پختن برنج به آن اضافه کنید و قابلمه را روی شعله قرار دهید تا به خوبی بپزد و می توانید کمی هم هل سابیده شده برای بوی بهتر در آب جوش ریخته و آن را صاف کنید و بعد به برنج اضافه کنید تا بوی معطر هل داخل برنج بپیچد. وقتی که برنج شما کاملاً پخت یعنی نزدیک یک ساعت جوشید موقع اضافه کردن شکر است و وقتی که شکر را به برنج اضافه می‌کنیم معمولاً کمی آب می‌اندازد و نگران شل شدن شله‌زرد نباشید زیرا وقتی که بجوشد موقع پختن آب اضافی تبخیر می‌شود و به قوام مناسب می‌رسد. باید شکر را هم در مقداری آب حل کنید و به صورت شهد غلیظ شده به شله‌زرد خود اضافه کنید. ولی برای اینکه کار شما ساده‌تر باشد و زودتر شله‌زرد شما آماده شود می‌توانید آن را هم به صورت مستقیم و بدون حل کردن محتویات خود اضافه کنید. و در نهایت باید خلال بادام را هم به شله‌زرد خود اضافه کنید و هم بزنید. اگر ذائقه شما با خلال بادام متناسب نیست می‌توانید فقط برای تزیین استفاده کنید و داخل شله‌زرد نریزید. حالا می‌توان گفت شله‌زرد شما آماده خوردن است و می‌توانید با کمی پودر هل، دارچین و خلال پسته و بادام آن را تزیین کرده و در ظرف مناسبی سرو کنید و میل نمایید.</p>
          </>
        )}
        {currentLanguage === 'en' && (
          <>
            <h1>Sholeh Zard</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Ingredients for Sholeh Zard</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Soaked rice:</td><td>2 cups</td></tr>
                <tr><td>Sugar:</td><td>4 cups</td></tr>
                <tr><td>Butter:</td><td>50 grams</td></tr>
                <tr><td>Saffron:</td><td>1 mesghal</td></tr>
                <tr><td>Oil:</td><td>1 tablespoon</td></tr>
                <tr><td>Pistachio and almond slivers:</td><td>as needed</td></tr>
              </tbody>
            </table>
            <br />
            <p>Preparation of Sholeh Zard: Wash the rice well as mentioned and soak it in warm water for about three hours. Then drain the rice and add about 6 cups of water to cook the rice and place the pot on the flame to cook well. You can also add some ground cardamom for a better aroma in the boiling water, strain it, and then add it to the rice to infuse the fragrant cardamom scent into the rice. When your rice is fully cooked, which means it has boiled for about an hour, it's time to add the sugar. When we add sugar to the rice, it usually releases some water, so don't worry about the Sholeh Zard becoming too runny because as it boils, the excess water will evaporate and it will reach the right consistency. You should also dissolve the sugar in some water and add it as a thick syrup to your Sholeh Zard. However, to make your work easier and for quicker preparation, you can also add it directly without dissolving. Finally, you should add the almond slivers to your Sholeh Zard and stir. If your taste doesn't match with almond slivers, you can use them only for decoration and not mix them into the Sholeh Zard. Now it can be said that your Sholeh Zard is ready to eat, and you can decorate it with some cardamom powder, cinnamon, and pistachio and almond slivers, serve it in a suitable dish, and enjoy.</p>
          </>
        )}
        {currentLanguage === 'ar' && (
          <>
            <h1>شله زرد</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>المكونات لتحضير شله زرد</th>
                  <th>الكمية</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>الأرز المنقوع:</td><td>2 كوب</td></tr>
                <tr><td>السكر:</td><td>4 كوب</td></tr>
                <tr><td>الزبدة:</td><td>50 جرام</td></tr>
                <tr><td>الزعفران:</td><td>1 مثقال</td></tr>
                <tr><td>الزيت:</td><td>1 ملعقة طعام</td></tr>
                <tr><td>شرائح الفستق واللوز:</td><td>حسب الحاجة</td></tr>
              </tbody>
            </table>
            <br />
            <p>طريقة تحضير شله زرد: اغسل الأرز جيدًا كما هو مذكور وانقعه في الماء الدافئ لمدة ثلاث ساعات تقريبًا. ثم صفي الأرز وأضف حوالي 6 أكواب من الماء لطهي الأرز وضع القدر على النار ليطهى جيدًا. يمكنك أيضًا إضافة بعض الهيل المطحون لرائحة أفضل في الماء المغلي، صفيه، ثم أضفه إلى الأرز لينتشر عطر الهيل المعطر في الأرز. عندما ينضج الأرز تمامًا، أي بعد غليانه لمدة ساعة تقريبًا، حان الوقت لإضافة السكر. عندما نضيف السكر إلى الأرز، عادة ما يطلق بعض الماء، لذا لا تقلق بشأن أن يصبح شله زرد سائلاً جدًا لأنه عندما يغلي، سيتبخر الماء الزائد ويصل إلى القوام المناسب. يجب أيضًا إذابة السكر في بعض الماء وإضافته كشراب كثيف إلى شله زرد. ومع ذلك، لجعل عملك أسهل ولتحضير شله زرد بسرعة أكبر، يمكنك أيضًا إضافته مباشرة دون إذابة. أخيرًا، يجب إضافة شرائح اللوز إلى شله زرد وتحريكها. إذا لم يتناسب ذوقك مع شرائح اللوز، يمكنك استخدامها فقط للتزيين وعدم خلطها في شله زرد. الآن يمكن القول أن شله زرد جاهز للأكل، ويمكنك تزيينه ببعض مسحوق الهيل والقرفة وشرائح الفستق واللوز، وتقديمه في طبق مناسب والاستمتاع به.</p>
          </>
        )}

<p>
        {currentLanguage === 'fa' && (
          <> <h1>حلوای سنتی زعفرانی</h1> 
          <table class="styled-table"> 
          <thead> <tr> <th>مواد لازم برای تهیه شهد حلوا</th> <th>مقدار</th> </tr> </thead> <tbody> <tr> <td>آب :</td> <td>نصف پیمانه</td> </tr> <tr> <td>گلاب :</td> <td>یک سوم پیمانه</td> </tr> <tr> <td>شکر :</td> <td>نصف پیمانه</td> </tr> <tr> <td>زعفران :</td> <td>به مقدار لازم</td> </tr> </tbody> </table> <br /> آرد را الک کنید و کمی روی حرارت ملایم تفت دهید و آن را به هم بزنید تا وقتی که تغییر رنگ می‌دهد و بوی خامی آن گرفته می‌شود. برای اینکه آرد شما گلوله نشود، حتماً آن را دوباره الک کنید و با روغن تفت دهید. تفت دادن بیش از حد باعث تلخی آن می‌شود. وقتی که آرد تغییر رنگ و بو داد، آن را کنار بگذارید و وسط قابلمه کره و روغن مایع و روغن جامد بریزید و آنها را با هم مخلوط کنید و تفت دادن را ادامه دهید. سپس کم کم شهد حلوا را به آرد اضافه کنید تا به قوام مناسب برسد و آماده سرو شود. <br /> شهد حلوا: آب و شکر را با هم مخلوط کرده و روی شعله گاز قرار دهید تا کاملاً شکر داخل آب حل شود. سپس گلاب و زعفران را اضافه کنید و بعد از مخلوط کردن، شهد را از روی شعله برداشته و به آرد تفت داده شده اضافه کنید.
          </>
          )}
       
</p>

<p>
        {currentLanguage === 'en' && (
          <> <h1>Traditional Saffron Halva</h1>
           <table class="styled-table"> 
            <thead> <tr> <th>Ingredients for Halva Syrup</th> <th>Amount</th> </tr> </thead> <tbody> <tr> <td>Water:</td> <td>1/2 cup</td> </tr> <tr> <td>Rose water:</td> <td>1/3 cup</td> </tr> <tr> <td>Sugar:</td> <td>1/2 cup</td> </tr> <tr> <td>Saffron:</td> <td>As needed</td> </tr> </tbody> </table> <br /> Sift the flour and lightly toast it over low heat, stirring until it changes color and loses its raw smell. To prevent lumps, sift the flour again and toast it with oil. Over-toasting can make it bitter. Once the flour changes color and smell, set it aside. In the middle of the pot, add butter, liquid oil, and solid oil, mix them, and continue toasting. Gradually add the halva syrup to the flour until it reaches the desired consistency and is ready to serve. <br /> Halva Syrup: Mix water and sugar and heat on the stove until the sugar is completely dissolved. Then add rose water and saffron, mix, and remove from heat. Add the syrup to the toasted flour.
      </>
      )}
       
</p>

        <p>
        {currentLanguage === 'ar' && (
          <> <h1>حلوى الزعفران التقليدية</h1> 
          <table class="styled-table"> 
          <thead> <tr> <th>مكونات شراب الحلوى</th> <th>الكمية</th> </tr> </thead> <tbody> <tr> <td>ماء:</td> <td>1/2 كوب</td> </tr> <tr> <td>ماء الورد:</td> <td>1/3 كوب</td> </tr> <tr> <td>سكر:</td> <td>1/2 كوب</td> </tr> <tr> <td>زعفران:</td> <td>حسب الحاجة</td> </tr> </tbody> </table> <br /> نخل الدقيق وتحميصه قليلاً على نار هادئة مع التحريك حتى يتغير لونه وتختفي رائحته النيئة. لمنع التكتلات، نخل الدقيق مرة أخرى وتحميصه بالزيت. التحميص الزائد يمكن أن يجعله مرًا. بمجرد أن يتغير لون ورائحة الدقيق، ضعه جانبًا. في وسط القدر، أضف الزبدة والزيت السائل والزيت الصلب، اخلطهم واستمر في التحميص. أضف شراب الحلوى تدريجيًا إلى الدقيق حتى يصل إلى القوام المطلوب ويصبح جاهزًا للتقديم. <br /> شراب الحلوى: اخلط الماء والسكر وسخنهما على الموقد حتى يذوب السكر تمامًا. ثم أضف ماء الورد والزعفران، اخلط وأزل من الحرارة. أضف الشراب إلى الدقيق المحمص.  </>
         
        )}
       
</p>

      </section>

  );
};

export default Deseri;
