"use client";
import { notFound } from "next/navigation";
import ru from "@/messages/ru.json";
import az from "@/messages/az.json";
import { JSX } from "react";

// Blog içeriği objesini tamamla (3, 4, 5 dahil) ve id/locale string olarak al
const BLOGS: Record<string, { ru: JSX.Element; az: JSX.Element }> = {
  "1": {
    ru: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{ru.KnowledgeBase.title}</h1>
          <div className="my-8">{ru.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          10 интересных фактов из статьи Auerbach M. и соавторы. Железодефицит у
          взрослых
        </h1>
        <div className="my-2">Дата публикации: 2025</div>
        <div className="my-8 text-2xl text-gray-400">
          Auerbach M. и соавторы. Железодефицит у взрослых: обзор // JAMA, 2025
        </div>
        <div className="text-xl">
          <ol>
            <li>
              <b>
                Железодефицит без анемии встречается гораздо чаще, чем принято
                думать:
              </b>
              у 38% женщин репродуктивного возраста в развитых странах он
              присутствует, даже если уровень гемоглобина нормальный.
            </li>
            <li>
              <b>Симптомы бывают не только физическими:</b> «туман в голове»,
              раздражительность, депрессия, снижение концентрации внимания могут
              быть признаками железодефицита, даже без анемии.
            </li>
            <li>
              <b>
                До 40% пациентов с дефицитом железа страдают от синдрома
                беспокойных ног,
              </b>{" "}
              что связано с нарушением уровня железа в мозге.
            </li>
            <li>
              <b>Пика (особенно желание есть лёд — пагофагия)</b> встречается у
              40–50% пациентов с железодефицитом — это один из ключевых
              симптомов.
            </li>
            <li>
              <b>
                Ферритин &lt;30 нг/мл — самый надёжный маркёр дефицита железа,
              </b>{" "}
              за исключением состояний с воспалением, при которых нужно
              дополнительно оценивать насыщение трансферрина.
            </li>
            <li>
              <b>
                Приём железа через день так же эффективен, как и ежедневный,
              </b>{" "}
              но вызывает меньше побочных эффектов со стороны ЖКТ.
            </li>
            <li>
              <b>
                У спортсменов, особенно женщин, дефицит железа встречается
                часто,
              </b>{" "}
              даже без анемии, и может снижать выносливость и работоспособность.
            </li>
            <li>
              <b>
                До 84% беременных женщин в третьем триместре страдают от
                железодефицита
              </b>{" "}
              — это может влиять на развитие плода и здоровье матери.
            </li>
            <li>
              <b>При хронических заболеваниях (ХБП, СН, ВЗК, рак)</b> уровень
              ферритина может быть нормальным или повышенным, и в этих случаях
              важнее смотреть на насыщение трансферрина (&lt;20%).
            </li>
            <li>
              <b>
                Современные внутривенные препараты железа (например,
                ферикарбоксимальтоза, ферикдеризомальтоза)
              </b>{" "}
              можно вводить однократно, быстро и безопасно — с минимальным
              риском аллергических реакций.
            </li>
          </ol>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Вернуться к списку материалов
          </Link>
        </div>
      </div>
    ),
    az: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{az.KnowledgeBase.title}</h1>
          <div className="my-8">{az.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Auerbach M. və müəlliflər. Böyüklərdə dəmir çatışmazlığı haqqında 10
          maraqlı fakt
        </h1>
        <div className="my-2">Dərc tarixi: 2025</div>
        <div className="my-8 text-2xl text-gray-400">
          Auerbach M. və müəlliflər. Böyüklərdə dəmir çatışmazlığı: icmal //
          JAMA, 2025
        </div>
        <div className="text-xl">
          <ol>
            <li>
              <b>
                Anemiyasız dəmir çatışmazlığı düşündüyümüzdən daha çox
                yayılmışdır:
              </b>{" "}
              İnkişaf etmiş ölkələrdə reproduktiv yaşda olan qadınların 38%-də,
              hətta hemoglobin səviyyəsi normal olsa belə, bu hal müşahidə
              olunur.
            </li>
            <li>
              <b>Sintomlar yalnız fiziki olmur:</b> &quot;Başda duman&quot;, əsəbilik,
              depressiya, diqqətin azalması dəmir çatışmazlığının əlamətləri ola
              bilər, hətta anemiya olmadan da.
            </li>
            <li>
              <b>
                Dəmir çatışmazlığı olan xəstələrin 40%-ə qədəri narahat ayaq
                sindromundan əziyyət çəkir,
              </b>{" "}
              bu, beyində dəmir səviyyəsinin pozulması ilə əlaqədardır.
            </li>
            <li>
              <b>Pika (xüsusilə buz yemək istəyi — paqofagiya)</b> dəmir
              çatışmazlığı olan xəstələrin 40–50%-də rast gəlinir — bu, əsas
              simptomlardan biridir.
            </li>
            <li>
              <b>
                Ferritin &lt;30 ng/ml — dəmir çatışmazlığının ən etibarlı
                göstəricisidir,
              </b>{" "}
              lakin iltihab hallarında əlavə olaraq transferinin doymasını
              qiymətləndirmək lazımdır.
            </li>
            <li>
              <b>
                Gündə bir dəfə deyil, bir gündən bir dəmir qəbul etmək də eyni
                dərəcədə effektivdir,
              </b>{" "}
              lakin mədə-bağırsaq yan təsirləri daha az olur.
            </li>
            <li>
              <b>
                Xüsusilə qadın idmançılarda dəmir çatışmazlığı tez-tez rast
                gəlinir,
              </b>{" "}
              hətta anemiya olmadan da, bu, dözümlülüyü və iş qabiliyyətini
              azalda bilər.
            </li>
            <li>
              <b>
                Üçüncü trimestrdə olan hamilə qadınların 84%-ə qədəri dəmir
                çatışmazlığından əziyyət çəkir
              </b>{" "}
              — bu, dölün inkişafına və ananın sağlamlığına təsir edə bilər.
            </li>
            <li>
              <b>Xroniki xəstəliklərdə (XBP, ÜYQ, VZK, xərçəng)</b> ferritin
              səviyyəsi normal və ya yüksək ola bilər, belə hallarda
              transferinin doymasına (&lt;20%) baxmaq daha vacibdir.
            </li>
            <li>
              <b>
                Müasir damar daxili dəmir preparatları (məsələn,
                ferikarboksimaltoza, ferikderizomaltoza)
              </b>{" "}
              tək dozada, tez və təhlükəsiz tətbiq oluna bilər — allergik
              reaksiyalar riski minimaldır.
            </li>
          </ol>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Materiallar siyahısına qayıt
          </Link>
        </div>
      </div>
    ),
  },
  "2": {
    ru: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{ru.KnowledgeBase.title}</h1>
          <div className="my-8">{ru.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Auerbach M. и соавторы. Железодефицит у взрослых: обзор
        </h1>
        <div className="my-2">Дата публикации: 2025</div>
        <div className="my-8 text-2xl text-gray-400">
          Auerbach M. и соавторы. Железодефицит у взрослых: обзор // JAMA, 2025;
          опубликовано онлайн 30 марта. DOI: 10.1001/jama.2025.0452
        </div>
        <div className="text-xl">
          <p>
            <b>Что хотели узнать?</b>
            <br />
            Авторы стремились обобщить современные данные о диагностике,
            причинах, симптомах и лечении абсолютного железодефицита и
            железодефицитной анемии у взрослых.
          </p>
          <p>
            <b>Кто и где это проводил?</b>
            <br />
            Обзор подготовлен Майклом Ауэрбахом (Georgetown University School of
            Medicine, США), Томасом ДеЛафери (Oregon Health & Science
            University, США) и Дженнифер Тирнауэр (UpToDate, США).
          </p>
          <p>
            <b>Как это проверяли?</b>
            <br />С помощью систематического поиска в PubMed и анализа 86
            публикаций (включая РКИ, обзоры, рекомендации и наблюдательные
            исследования), опубликованных с 2014 по 2024 год.
          </p>
          <p>
            <b>Что обнаружили?</b>
            <br />
            Абсолютный железодефицит (низкий ферритин и/или насыщение
            трансферрина &lt;20%) — распространённое состояние, затрагивающее
            около 14% взрослых в США. Причины включают кровопотери, нарушения
            всасывания (например, целиакия, Хеликобактер, бариатрические
            операции), хронические воспалительные заболевания (ХБП, СН, ВЗК),
            беременность и приём НПВП. Симптомы могут включать усталость,
            снижение концентрации, синдром беспокойных ног, пика и другие.
            Пероральное железо — терапия первой линии, но внутривенное железо
            показано при непереносимости, нарушенном всасывании или активном
            воспалении.
          </p>
          <p>
            <b>Выводы</b>
            <br />
            Железодефицит — частая и поддающаяся лечению причина различных
            симптомов. Для диагностики необходимы ферритин и/или насыщение
            трансферрина. Лечение должно включать устранение причин и
            восполнение дефицита железа (перорально или внутривенно в
            зависимости от клинической ситуации).
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Вернуться к списку материалов
          </Link>
        </div>
      </div>
    ),
    az: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{az.KnowledgeBase.title}</h1>
          <div className="my-8">{az.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Auerbach M. və müəlliflər. Böyüklərdə dəmir çatışmazlığı: icmal
        </h1>
        <div className="my-2">Dərc tarixi: 2025</div>
        <div className="my-8 text-2xl text-gray-400">
          Auerbach M. və müəlliflər. Böyüklərdə dəmir çatışmazlığı: icmal //
          JAMA, 2025; onlayn dərc olunub 30 mart. DOI: 10.1001/jama.2025.0452
        </div>
        <div className="text-xl">
          <p>
            <b>Nəyi öyrənmək istədilər?</b>
            <br />
            Müəlliflər böyüklərdə dəmir çatışmazlığı və dəmir çatışmazlığı
            anemiyasının diaqnostikası, səbəbləri, simptomları və müalicəsi üzrə
            müasir məlumatları ümumiləşdirmək istədilər.
          </p>
          <p>
            <b>Kim və harada aparıb?</b>
            <br />
            İcmal Michael Auerbach (Georgetown University School of Medicine,
            ABŞ), Thomas DeLaFeri (Oregon Health & Science University, ABŞ) və
            Jennifer Tirnauer (UpToDate, ABŞ) tərəfindən hazırlanıb.
          </p>
          <p>
            <b>Necə yoxlanılıb?</b>
            <br />
            2014–2024-cü illər arasında dərc olunmuş 86 nəşrin (RCT, icmallar,
            tövsiyələr və müşahidə tədqiqatları daxil olmaqla) PubMed-də
            sistemli axtarışı və təhlili aparılıb.
          </p>
          <p>
            <b>Nə aşkar edilib?</b>
            <br />
            Absolut dəmir çatışmazlığı (aşağı ferritin və/və ya transferinin
            doyması &lt;20%) ABŞ-da böyüklərin təxminən 14%-ni əhatə edən geniş
            yayılmış bir vəziyyətdir. Səbəblərə qan itkiləri, udulma
            pozğunluqları (məsələn, çölyakiya, Helicobacter, bariatrik
            əməliyyatlar), xroniki iltihabi xəstəliklər (XBP, ÜYQ, VZK),
            hamiləlik və QİÇS daxildir. Simptomlara yorğunluq, diqqətin
            azalması, narahat ayaq sindromu, pika və s. daxildir. Peroral dəmir
            birinci seçim terapiyadır, lakin dözümsüzlük, udulma pozğunluğu və
            ya aktiv iltihab olduqda damar daxili dəmir tövsiyə olunur.
          </p>
          <p>
            <b>Nəticə</b>
            <br />
            Dəmir çatışmazlığı müxtəlif simptomların tez-tez və müalicə oluna
            bilən səbəbidir. Diaqnostika üçün ferritin və/və ya transferinin
            doyması lazımdır. Müalicə səbəblərin aradan qaldırılması və dəmir
            çatışmazlığının bərpasını (peroral və ya damar daxili, klinik
            vəziyyətdən asılı olaraq) əhatə etməlidir.
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Materiallar siyahısına qayıt
          </Link>
        </div>
      </div>
    ),
  },
  "3": {
    ru: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{ru.KnowledgeBase.title}</h1>
          <div className="my-8">{ru.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Siebenthal H.K. и соавторы. Effect of dietary factors and time of day
          on iron absorption from oral iron supplements in iron deficient women
        </h1>
        <div className="my-2">Дата публикации: 2023</div>
        <div className="my-8 text-2xl text-gray-400">
          Siebenthal H.K. и соавторы. Effect of dietary factors and time of day
          on iron absorption from oral iron supplements in iron deficient women
          American Journal of Hematology, 2023; 98(9): 1356–1363. DOI:
          10.1002/ajh.26987
        </div>
        <div className="text-xl">
          <p>
            <b>Что хотели узнать?</b>
            <br />
            Авторы стремились выяснить, как время суток и пищевые факторы
            (аскорбиновая кислота, кофе, приём с завтраком) влияют на абсорбцию
            железа из пероральных добавок у женщин с железодефицитом.
          </p>
          <p>
            <b>Кто и где это проводил?</b>
            <br />
            Исследование проведено Ханной фон Зибенталь и коллегами из
            Лаборатории питания человека ETH Zurich (Швейцария), при участии MRC
            Human Immunology Unit (Оксфорд, Великобритания).
          </p>
          <p>
            <b>Как это проверяли?</b>
            <br />В открытом кроссовер-исследовании 34 женщинам с дефицитом
            железа давали по 100 мг железа (в форме фумарата) в шести разных
            условиях: с водой (утром), с 80 мг и 500 мг аскорбиновой кислоты, с
            кофе, с завтраком (включая кофе и апельсиновый сок), а также с водой
            — но днём. Поглощение железа измеряли с помощью стабильных изотопов
            и оценки их включения в эритроциты.
          </p>
          <p>
            <b>Что обнаружили?</b>
          </p>
          <ul>
            <li>
              80 мг аскорбиновой кислоты увеличивали абсорбцию железа на{/* */}
              <b>30%</b> (по сравнению с водой утром), но доза 500 мг{" "}
              <b>не давала дополнительного эффекта</b>.
            </li>
            <li>
              Кофе снижал всасывание железа на <b>54%</b>, а завтрак с кофе и
              соком — на <b>66%</b>, несмотря на наличие витамина С.
            </li>
            <li>
              Приём железа днём сопровождался <b>на 37% меньшей абсорбцией</b>,
              чем утром, из-за более высокого уровня гепсидина.
            </li>
          </ul>
          <p>
            <b>Выводы</b>
            <br />
            Для максимального эффекта железосодержащие препараты следует
            принимать <b>
              утром, натощак, с продуктами, богатыми витамином С,
            </b>{/* */}
            но{" "}
            <b>
              избегать кофе и пищи с высоким содержанием фитатов и полифенолов
            </b>
            . Добавление 80 мг аскорбиновой кислоты повышает всасывание, но
            увеличенные дозы не дают дополнительных преимуществ.
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Вернуться к списку материалов
          </Link>
        </div>
      </div>
    ),
    az: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{az.KnowledgeBase.title}</h1>
          <div className="my-8">{az.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Siebenthal H.K. və müəlliflər. Dəmir çatışmazlığı olan qadınlarda
          ağızdan qəbul edilən dəmir əlavələrindən dəmirin mənimsənilməsinə qida
          amilləri və günün vaxtının təsiri
        </h1>
        <div className="my-2">Dərc tarixi: 2023</div>
        <div className="my-8 text-2xl text-gray-400">
          Siebenthal H.K. və müəlliflər. Dəmir çatışmazlığı olan qadınlarda
          ağızdan qəbul edilən dəmir əlavələrindən dəmirin mənimsənilməsinə qida
          amilləri və günün vaxtının təsiri // American Journal of Hematology,
          2023; 98(9): 1356–1363. DOI: 10.1002/ajh.26987
        </div>
        <div className="text-xl">
          <p>
            <b>Nəyi öyrənmək istədilər?</b>
            <br />
            Müəlliflər günün vaxtı və qida amillərinin (askorbin turşusu, qəhvə,
            səhər yeməyi ilə qəbul) dəmirin ağızdan qəbul edilən əlavələrdən
            mənimsənilməsinə təsirini öyrənmək istədilər.
          </p>
          <p>
            <b>Kim və harada aparıb?</b>
            <br />
            Tədqiqat İsveçrənin ETH Zurich İnsan Qidalanması Laboratoriyasında
            Hannah von Siebenthal və həmkarları tərəfindən, MRC Human Immunology
            Unit (Oksford, Böyük Britaniya) iştirakı ilə aparılıb.
          </p>
          <p>
            <b>Necə yoxlanılıb?</b>
            <br />
            Açıq krossover tədqiqatında dəmir çatışmazlığı olan 34 qadına 6
            fərqli şəraitdə (səhər su ilə, 80 mg və 500 mg askorbin turşusu ilə,
            qəhvə ilə, səhər yeməyi ilə (qəhvə və portağal şirəsi daxil
            olmaqla), gündüz su ilə) 100 mg dəmir (fumarat şəklində) verilib.
            Dəmirin mənimsənilməsi sabit izotoplar və onların eritrositlərə
            daxil olması ilə ölçülüb.
          </p>
          <p>
            <b>Nə aşkar edilib?</b>
          </p>
          <ul>
            <li>
              80 mg askorbin turşusu dəmirin mənimsənilməsini <b>30%</b> artırıb
              (səhər su ilə müqayisədə), lakin 500 mg doza{" "}
              <b>əlavə effekt verməyib</b>.
            </li>
            <li>
              Qəhvə dəmirin mənimsənilməsini <b>54%</b> azaldıb, səhər yeməyi
              (qəhvə və şirə ilə) isə <b>66%</b> azaldıb, vitamin C olmasına
              baxmayaraq.
            </li>
            <li>
              Dəmirin gündüz qəbulunda mənimsənilmə <b>37% az</b> olub, bu da
              daha yüksək hepsidin səviyyəsi ilə əlaqədardır.
            </li>
          </ul>
          <p>
            <b>Nəticə</b>
            <br />
            Maksimal effekt üçün dəmir preparatları{" "}
            <b>səhər, acqarına, vitamin C ilə zəngin qidalarla</b> qəbul
            edilməli,{" "}
            <b>qəhvə və fitat/polifenol tərkibli qidalardan qaçınılmalıdır</b>.
            80 mg askorbin turşusu mənimsənilməni artırır, lakin daha yüksək
            doza əlavə üstünlük vermir.
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Materiallar siyahısına qayıt
          </Link>
        </div>
      </div>
    ),
  },
  "4": {
    ru: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{ru.KnowledgeBase.title}</h1>
          <div className="my-8">{ru.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Шулятьева Н.В. и соавторы. Патогенетические варианты латентного
          дефицита железа и эффективность терапии у больных с инфекцией H.
          pylori
        </h1>
        <div className="my-2">Дата публикации: 2021</div>
        <div className="my-8 text-2xl text-gray-400">
          Шулятьева Н.В. и соавторы. Патогенетические варианты латентного
          дефицита железа и эффективность терапии у больных с инфекцией H.
          pylori // Поликлиника, 2021; №2: 10–14.
        </div>
        <div className="text-xl">
          <p>
            <b>Что хотели узнать?</b>
            <br />
            Авторы стремились определить частоту латентного дефицита железа
            (ЛДЖ) у пациентов с инфекцией H. pylori, изучить патогенетические
            варианты ЛДЖ и оценить эффективность терапии препаратами железа в
            зависимости от наличия воспаления и уровня гепсидина.
          </p>
          <p>
            <b>Кто и где это проводил?</b>
            <br />
            Исследование проводилось в Первом Московском государственном
            медицинском университете имени И.М. Сеченова (Сеченовский
            Университет, Россия), на кафедре клинической фармакологии и
            пропедевтики внутренних болезней.
          </p>
          <p>
            <b>Как это проверяли?</b>
            <br />У 606 пациентов с подтверждённой инфекцией H. pylori (405
            мужчин и 201 женщина) определяли уровень ферритина, трансферринового
            насыщения, гепсидина и другие показатели обмена железа. Латентный
            дефицит железа диагностировали при нормальном гемоглобине и
            сниженных маркёрах железа. Эффективность лечения (препаратом железа
            и/или эрадикационной терапией) оценивали по изменениям показателей
            крови.
          </p>
          <p>
            <b>Что обнаружили?</b>
            <br />
            Частота ЛДЖ составила 10,9%, чаще встречался у женщин. Были выделены
            три патогенетических варианта ЛДЖ:
          </p>
          <ol>
            <li>Истинный дефицит железа (ферритин &lt;15 мкг/л);</li>
            <li>
              Комбинированный ЛДЖ (ферритин 15–70 мкг/л и повышение гепсидина);
            </li>
            <li>
              Функциональный дефицит на фоне воспаления (ферритин &gt;70 мкг/л и
              высокий гепсидин).
            </li>
          </ol>
          <p>
            Наибольшая эффективность терапии достигалась при сочетании
            эрадикации H. pylori и назначения препаратов железа — 88%. Уровень
            гепсидина оказался надёжным маркёром, предсказывающим эффективность
            лечения.
          </p>
          <p>
            <b>Выводы</b>
            <br />
            Инфекция H. pylori является значимым фактором в развитии латентного
            дефицита железа через воспалительный механизм, опосредованный
            гепсидином. Успешная эрадикация инфекции повышает эффективность
            терапии препаратами железа. Уровень гепсидина может использоваться
            как прогностический маркёр ответа на лечение.
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Вернуться к списку материалов
          </Link>
        </div>
      </div>
    ),
    az: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{az.KnowledgeBase.title}</h1>
          <div className="my-8">{az.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Şulyatyeva N.V. və müəlliflər. Gizli dəmir çatışmazlığının patogenetik
          variantları və H. pylori infeksiyalı xəstələrdə terapiyanın
          effektivliyi
        </h1>
        <div className="my-2">Dərc tarixi: 2021</div>
        <div className="my-8 text-2xl text-gray-400">
          Şulyatyeva N.V. və müəlliflər. Gizli dəmir çatışmazlığının patogenetik
          variantları və H. pylori infeksiyalı xəstələrdə terapiyanın
          effektivliyi // Poliklinika, 2021; №2: 10–14.
        </div>
        <div className="text-xl">
          <p>
            <b>Nəyi öyrənmək istədilər?</b>
            <br />
            Müəlliflər H. pylori infeksiyalı xəstələrdə gizli dəmir
            çatışmazlığının (GDÇ) tezliyini, GDÇ-nin patogenetik variantlarını
            və iltihab və hepsidin səviyyəsindən asılı olaraq dəmir preparatları
            ilə müalicənin effektivliyini öyrənmək istədilər.
          </p>
          <p>
            <b>Kim və harada aparıb?</b>
            <br />
            Tədqiqat Rusiya, Seçenov Universitetinin Daxili Xəstəliklərin
            Propedevtikası və Klinik Farmakologiya kafedrasında aparılıb.
          </p>
          <p>
            <b>Necə yoxlanılıb?</b>
            <br />
            606 H. pylori infeksiyası təsdiqlənmiş xəstədə (405 kişi, 201 qadın)
            ferritin, transferinin doyması, hepsidin və digər dəmir mübadiləsi
            göstəriciləri ölçülüb. Gizli dəmir çatışmazlığı normal hemoglobin və
            aşağı dəmir göstəriciləri ilə diaqnoz qoyulub. Müalicənin
            effektivliyi (dəmir preparatı və/və ya eradikasiya terapiyası) qan
            göstəricilərinin dəyişməsi ilə qiymətləndirilib.
          </p>
          <p>
            <b>Nə aşkar edilib?</b>
            <br />
            GDÇ tezliyi 10,9% olub, qadınlarda daha çox rast gəlinib. Üç
            patogenetik variant müəyyən edilib:
          </p>
          <ol>
            <li>Həqiqi dəmir çatışmazlığı (ferritin &lt;15 mkq/l);</li>
            <li>
              Kombinə olunmuş GDÇ (ferritin 15–70 mkq/l və hepsidinin artması);
            </li>
            <li>
              Iltihab fonunda funksional çatışmazlıq (ferritin &gt;70 mkq/l və
              yüksək hepsidin).
            </li>
          </ol>
          <p>
            Müalicənin ən yüksək effektivliyi H. pylori eradikasiyası və dəmir
            preparatlarının birgə təyinatı zamanı (88%) əldə olunub. Hepsidin
            səviyyəsi müalicənin effektivliyini proqnozlaşdıran etibarlı marker
            olub.
          </p>
          <p>
            <b>Nəticə</b>
            <br />
            H. pylori infeksiyası hepsidin vasitəçiliyi ilə iltihabi mexanizmlə
            gizli dəmir çatışmazlığının inkişafında mühüm rol oynayır.
            İnfeksiyanın uğurlu eradikasiyası dəmir preparatları ilə müalicənin
            effektivliyini artırır. Hepsidin səviyyəsi müalicəyə cavabın
            proqnostik marker kimi istifadə oluna bilər.
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Materiallar siyahısına qayıt
          </Link>
        </div>
      </div>
    ),
  },
  "5": {
    ru: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{ru.KnowledgeBase.title}</h1>
          <div className="my-8">{ru.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Timoshnikov V.A. и соавторы. Redox Interactions of Vitamin C and Iron:
          Inhibition of the Pro-Oxidant Activity by Deferiprone
        </h1>
        <div className="my-2">Дата публикации: 2020</div>
        <div className="my-8 text-2xl text-gray-400">
          Timoshnikov V.A. и соавторы. Redox Interactions of Vitamin C and Iron:
          Inhibition of the Pro-Oxidant Activity by Deferiprone // International
          Journal of Molecular Sciences, 2020; 21(11): 3967. DOI:
          10.3390/ijms21113967
        </div>
        <div className="text-xl">
          <p>
            <b>Что хотели узнать?</b>
            <br />
            Авторы стремились выяснить, как взаимодействуют аскорбиновая кислота
            (витамин C), железо и хелатор деферипрон (L1), особенно в контексте
            антиоксидантной и прооксидантной активности, образования свободных
            радикалов и влияния pH.
          </p>
          <p>
            <b>Кто и где это проводил?</b>
            <br />
            Исследование проведено В.А. Тимошниковым и коллегами из Института
            химической кинетики и горения СО РАН (Новосибирск, Россия) в
            сотрудничестве с Postgraduate Research Institute of Science,
            Technology, Environment and Medicine (Кипр).
          </p>
          <p>
            <b>Как это проверяли?</b>
            <br />
            Применялись методы УФ-спектрофотометрии, ЯМР и ЭПР-спинового
            захвата. Исследовались реакции аскорбиновой кислоты с трёхвалентным
            железом и хелатным комплексом FeL1₃ при разных pH, включая
            образование радикалов гидроксила в реакциях Фентона.
          </p>
          <p>
            <b>Что обнаружили?</b>
          </p>
          <ul>
            <li>
              Аскорбиновая кислота активно восстанавливает Fe³⁺ до Fe²⁺,
              усиливая образование токсичных гидроксильных радикалов через
              Fenton-реакцию.
            </li>
            <li>
              При физиологическом pH (7.4) образуется стабильный смешанный хелат
              FeL1₂Asc, не проявляющий прооксидантной активности.
            </li>
            <li>
              При более кислых значениях pH (4–5) этот комплекс нестабилен и
              быстро распадается.
            </li>
            <li>
              Деферипрон подавляет образование радикалов даже в присутствии
              высоких концентраций аскорбиновой кислоты.
            </li>
          </ul>
          <p>
            <b>Выводы</b>
            <br />
            Аскорбиновая кислота может проявлять как антиоксидантные, так и
            прооксидантные свойства в зависимости от условий среды, особенно pH
            и наличия хелаторов. В присутствии железа витамин C усиливает
            образование активных форм кислорода, что требует осторожности при
            его применении в условиях перегрузки железом. В то же время,
            совместное использование с хелаторами, такими как деферипрон, может
            снижать этот риск и использоваться в терапии, направленной на
            снижение токсичности железа.
          </p>
          <p>
            <b>Объяснение обнаруженного механизма</b>
            <br />
            Когда человек принимает железо вместе с витамином С (аскорбиновой
            кислотой), витамин С помогает железу лучше всасываться в кишечнике.
            Это происходит потому, что витамин С восстанавливает железо из формы
            Fe³⁺ в форму Fe²⁺ — а именно в такой форме оно легче попадает в
            кровь.
          </p>
          <p>
            Но в этом есть и <b>обратная сторона</b>. Если в организме много
            свободного железа, особенно Fe²⁺, и рядом есть кислород, запускается{" "}
            <b>реакция Фентона</b>. Это химическая реакция, в которой железо
            участвует в образовании <b>свободных радикалов</b> — очень активных
            и агрессивных молекул, которые могут повреждать клетки и ДНК.
            Особенно опасны <b>гидроксильные радикалы (•OH)</b>.
          </p>
          <p>Исследователи обнаружили, что:</p>
          <ol>
            <li>
              <b>
                Аскорбиновая кислота усиливает прооксидантную активность железа
              </b>
              , особенно в кислой среде (например, в желудке), где свободное
              железо активнее.
            </li>
            <li>
              <b>
                При нейтральном pH (например, в крови) витамин С образует с
                железом устойчивые соединения
              </b>
              , которые не участвуют в образовании радикалов.
            </li>
            <li>
              <b>Деферипрон</b> — это хелатор, он «связывает» железо и не даёт
              ему участвовать в вредных реакциях. Даже в присутствии витамина С
              он может <b>подавлять образование свободных радикалов</b>.
            </li>
            <li>
              Чем кислее среда (ниже pH), тем хуже стабильность защитного
              комплекса «железо + деферипрон + витамин С» — и тем выше риск
              повреждения клеток.
            </li>
          </ol>
          <p>
            <b>Вывод</b>
            <br />
            Витамин С помогает усваивать железо, но может превратить его в
            источник опасных реакций, если железа слишком много или если условия
            способствуют образованию свободных радикалов. Поэтому при лечении
            дефицита железа важно учитывать не только дозу витамина С, но и
            общее состояние организма, а также использовать вещества, которые
            могут защищать от побочного действия железа.
          </p>
          <p>
            Если будет интересно — могу сделать инфографику или диаграмму по
            этим процессам.
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Вернуться к списку материалов
          </Link>
        </div>
      </div>
    ),
    az: (
      <div className="knowledgebase pt-48 max-w-screen-lg w-full mx-auto px-4">
        <div className="max-w-screen-sm w-full mx-auto text-center mb-24">
          <h1 className="text-2xl font-bold">{az.KnowledgeBase.title}</h1>
          <div className="my-8">{az.KnowledgeBase.subtitle}</div>
        </div>
        <h1 className="text-2xl text-sorbifer-dark">
          Timoshnikov V.A. və müəlliflər. Vitamin C və dəmirin redoks qarşılıqlı təsirləri: Deferipron ilə pro-oksidant aktivliyin qarşısının alınması{/* */}
        </h1>
        <div className="my-2">Dərc tarixi: 2020</div>
        <div className="my-8 text-2xl text-gray-400">
          Timoshnikov V.A. və müəlliflər. Vitamin C və dəmirin redoks qarşılıqlı
          təsirləri: Deferipron ilə pro-oksidant aktivliyin qarşısının alınması
          International Journal of Molecular Sciences, 2020; 21(11): 3967.
          DOI: 10.3390/ijms21113967
        </div>
        <div className="text-xl">
          <p>
            <b>Nəyi öyrənmək istədilər?</b>
            <br />
            Müəlliflər askorbin turşusu (vitamin C), dəmir və xelator
            deferipronun (L1) qarşılıqlı təsirini, xüsusilə antioksidant və
            prooksidant aktivlik, sərbəst radikalların yaranması və pH təsiri
            kontekstində öyrənmək istədilər.
          </p>
          <p>
            <b>Kim və harada aparıb?</b>
            <br />
            Tədqiqat Rusiya, Novosibirsk, Kimyəvi Kinetika və Yanma İnstitutunda
            (Rusiya Elmlər Akademiyası) və Kiprdəki Postgraduate Research
            Institute of Science, Technology, Environment and Medicine ilə
            əməkdaşlıqda aparılıb.
          </p>
          <p>
            <b>Necə yoxlanılıb?</b>
            <br />
            UV-spektrofotometriya, YMR və EPR-spin tutma metodları tətbiq
            edilib. Askorbin turşusu ilə üçvalentli dəmir və FeL1₃ xelat
            kompleksi müxtəlif pH-da, o cümlədən Fenton reaksiyalarında
            hidroksil radikallarının yaranması öyrənilib.
          </p>
          <p>
            <b>Nə aşkar edilib?</b>
          </p>
          <ul>
            <li>
              Askorbin turşusu Fe³⁺-i Fe²⁺-ə fəal şəkildə endirir və Fenton
              reaksiyası vasitəsilə toksik hidroksil radikallarının yaranmasını
              artırır.
            </li>
            <li>
              Fizioloji pH-da (7.4) sabit qarışıq xelat FeL1₂Asc yaranır və
              prooksidant aktivlik göstərmir.
            </li>
            <li>
              Daha turşu pH-da (4–5) bu kompleks qeyri-sabit olur və tez
              dağılır.
            </li>
            <li>
              Deferipron hətta yüksək askorbin turşusu konsentrasiyasında belə
              radikalların yaranmasını azaldır.
            </li>
          </ul>
          <p>
            <b>Nəticə</b>
            <br />
            Askorbin turşusu mühitin şərtlərindən, xüsusilə pH və xelatorların
            mövcudluğundan asılı olaraq həm antioksidant, həm də prooksidant
            xüsusiyyətlər göstərə bilər. Dəmir olduqda vitamin C aktiv oksigen
            formalarının yaranmasını artırır, bu isə dəmir yüklənməsi şəraitində
            ehtiyatlılıq tələb edir. Eyni zamanda, deferipron kimi xelatorlarla
            birgə istifadə bu riski azalda və dəmirin toksikliyini azaltmağa
            yönəlmiş terapiyada istifadə oluna bilər.
          </p>
          <p>
            <b>Aşkarlanmış mexanizmin izahı</b>
            <br />
            İnsan dəmiri vitamin C (askorbin turşusu) ilə birlikdə qəbul
            etdikdə, vitamin C dəmirin bağırsaqda daha yaxşı mənimsənilməsinə
            kömək edir. Bu, vitamin C-nin dəmiri Fe³⁺ formasından Fe²⁺ formasına
            endirməsi ilə baş verir — məhz bu formada dəmir daha asan qana
            keçir.
          </p>
          <p>
            Lakin bunun <b>digər tərəfi</b> də var. Orqanizmdə çoxlu sərbəst
            dəmir olduqda, xüsusilə Fe²⁺ və ətrafda oksigen olduqda,{" "}
            <b>Fenton reaksiyası</b> başlayır. Bu, dəmirin sərbəst radikalların
            — hüceyrə və DNT-yə zərər verə bilən çox aktiv molekulların
            yaranmasında iştirak etdiyi kimyəvi reaksiyadır. Xüsusilə{" "}
            <b>hidroksil radikalları (•OH)</b> təhlükəlidir.
          </p>
          <p>Tədqiqatçılar aşkar ediblər ki:</p>
          <ol>
            <li>
              <b>Askorbin turşusu dəmirin prooksidant aktivliyini artırır</b>,
              xüsusilə turşu mühitdə (məsələn, mədədə), burada sərbəst dəmir
              daha aktiv olur.
            </li>
            <li>
              <b>
                Neytral pH-da (məsələn, qanda) vitamin C dəmir ilə sabit
                birləşmələr əmələ gətirir
              </b>{/* */}
              və onlar radikal yaranmasında iştirak etmir.
            </li>
            <li>
              <b>Deferipron</b> — xelatordur, dəmiri &quot;bağlayır&quot; və onun zərərli
              reaksiyalarda iştirak etməsinə imkan vermir. Hətta vitamin C
              olduqda belə, sərbəst radikalların yaranmasını azalda bilər.
            </li>
            <li>
              Mühit nə qədər turşu olarsa (pH aşağı), &quot;dəmir + deferipron +
              vitamin C&quot; qoruyucu kompleksinin sabitliyi bir o qədər pis olar və
              hüceyrə zədələnməsi riski artar.
            </li>
          </ol>
          <p>
            <b>Nəticə</b>
            <br />
            Vitamin C dəmirin mənimsənilməsinə kömək edir, lakin dəmir çox
            olduqda və ya sərbəst radikalların yaranmasına şərait olduqda onu
            təhlükəli reaksiyaların mənbəyinə çevirə bilər. Buna görə dəmir
            çatışmazlığının müalicəsində təkcə vitamin C dozasını deyil, həm də
            orqanizmin ümumi vəziyyətini nəzərə almaq və dəmirin yan təsirindən
            qoruyan maddələrdən istifadə etmək vacibdir.
          </p>
          <p>
            Əlavə maraqlı olsa — bu proseslər üzrə infoqrafika və ya diaqram
            hazırlaya bilərəm.
          </p>
        </div>
        <div className="text-center my-24">
          <Link href="/knowledgebase" className="underline text-sorbifer-dark">
            Materiallar siyahısına qayıt
          </Link>
        </div>
      </div>
    ),
  },
};


import Link from "next/link";
import { useParams } from "next/navigation";

export default function KnowledgeBaseBlogPage() {
  const params = useParams();
  let locale = params?.locale;
  let id = params?.id;
  if (Array.isArray(locale)) locale = locale[0];
  if (Array.isArray(id)) id = id[0];
  if (!id || typeof id !== "string" || !BLOGS[id]) return notFound();
  const lang: "ru" | "az" = locale === "az" ? "az" : "ru";
  const content = BLOGS[id][lang];
  if (!content) return notFound();
  return <div className="bg-white">{content}</div>;
}
