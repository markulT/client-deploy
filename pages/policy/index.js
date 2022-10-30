import {useState} from "react";
import Button from "../../comps/Button";
import {useDispatch} from "react-redux";
import {setPolicy} from "../../storage/reducers/signReducer";
import {useRouter} from "next/router";

export default function Policy() {
    const [read, setRead] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <div className={'min-h-[100%] font-[Inter] w-full bg-gradient-to-r from-grad_from to-grad_to'}>
            <div className='container min-h-screen mx-auto pt-4'>
                <div className="bg-grad_from pl-4 pr-4 rounded-3xl">
                    <h2 className={'text-2xl pt-4'}>Магазин тимчасово не працює. Все буде Україна!</h2>
                    <h2 className={'text-2xl mt-4'}>Політика конфіденційності сайту</h2>
                    <h2 className={'text-2xl mt-4'}>09.07.2019</h2>
                    <h2 className={'text-2xl mt-4'}>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ</h2>
                    <h3 className={'text-xl'}>Розділ І. Загальні положення</h3>
                    <p className={'text-xl'}>1. Web - сайт _____ (далі – Сайт) належить на праві власності ____, код ЄДРПОУ ______ ( далі – Компанія) . Всі фрази об'єкти права інтелектуальної власності, які містяться на сайті, окрім випадків, коли про це окремо зазначено, належать на праві власності Компанії.</p>
                    <p className={'text-xl mt-2'}>2. Дана Політика конфіденційності та захисту персональних даних (далі – Політика конфіденційності) є чинною виключно в рамках Правил користування Сайтом та не поширюється на web – сайти третіх осіб.</p>
                    <p className={'text-xl mt-2'}>3. Дана Політика Політики конфіденційності є комплексом правових, адміністративних , організаційних, технічних та інших заходів, які вживає Компанія з метою забезпечення конфіденційності та захисту персональних даних фізичних осіб - споживачів, які є користувачами Сайту, окрім випадків, коли така інформація особисто та свідомо розголошується споживачем – користувачем Сайту.</p>
                    <p className={'text-xl mt-2'}>4. Метою впровадження Політики конфіденційності та захисту персональних даних є недопущення публічного доступу та розголошення інформації, володільцем якої є споживач</p>
                    <p className={'text-xl mt-2'}>5. Компанія вживає всіх можливих заходів з метою забезпечення виконання заходів, передбачених даним розділом Політики конфіденційності.</p>
                    <h3 className={'text-xl mt-4'}>Розділ ІІ. Доступ до персональних даних</h3>
                    <p className={'text-xl mt-2'}>1. З метою реалізації функцій та завдань Сайту та інших цілей, пов'язаних з цивільно - правовими відносинами між Компанією та споживачем, споживач, користуючись даним Сайтом та послугами, для надання яких створений Сайт, надає Компанії дозвіл на збирання, накопичення, обробку, зберігання та використання (в тому числі з використанням автоматизовуваних засобів) персональних даних, володільцем яких він являється.</p>
                    <p className={'text-xl mt-2'}>1.1. З метою реалізації функцій та завдань Сайту та інших цілей, пов'язаних з цивільно - правовими відносинами між Компанією та споживачем, споживач, користуючись даним Сайтом та послугами, для надання яких створений Сайт, надає Компанії дозвіл на передачу власних персональних даних третім особам.</p>
                    <p className={'text-xl mt-2'}>2. Згода споживача, яка надається Компанії на збирання, обробку, зберігання та використання (в тому числі з використанням автоматизовуваних засобів) персональних даних та їх передачу третім особам оформлюється шляхом проставлення споживачем відмітки про надання дозволу на збирання, накопичення, обробку, зберігання та використання своїх персональних даних.</p>
                    <p className={'text-xl mt-2'}>3. До персональних даних, на збирання, накопичення, обробку, зберігання та використання яких (у тому числі з використанням автоматизовуваних засобів) споживач надає дозвіл Компанії входити:</p>
                    <p className={'text-xl mt-2'}>1. прізвище, ім'я, по - батькові;</p>
                    <p className={'text-xl mt-2'}>2. місце реєстрації;</p>
                    <p className={'text-xl mt-2'}>3. стати;</p>
                    <p className={'text-xl mt-2'}>4. місце проживання;</p>
                    <p className={'text-xl mt-2'}>5. інформація про сімейний стан;</p>
                    <p className={'text-xl mt-2'}>6. дата та місце народження споживача;</p>
                    <p className={'text-xl mt-2'}>7. номери засобів зв'язку (телефон, e - mail та ін.);</p>
                    <p className={'text-xl mt-2'}>8. інформація про географічне розташування;</p>
                    <p className={'text-xl mt-2'}>9. інформація про банківські та інші фінансові операції;</p>
                    <p className={'text-xl mt-2'}>....Інша інформація, яка самостійно вносити споживачем.</p>
                    <h3 className={'text-xl mt-4'}>ІІІ. Рядків та місце зберігання Персональних даних</h3>
                    <p className={'text-xl mt-2'}>1. Персональні дані, на збирання, накопичення, обробку, зберігання та використання яких споживач надає доступ Компанії зберігаються безстроково, якщо інше не встановлено законодавством України або волевиявленням споживача.</p>
                    <p className={'text-xl mt-2'}>2. Місцем зберігання персональних даних споживача є _____.</p>
                    <p className={'text-xl mt-2'}>3. Місцезнаходженням Компанії є ___________ .</p>
                    <h3 className={'text-xl mt-4'}>IV. Права споживача</h3>
                    <p className={'text-xl mt-2'}>1. Споживач, відносно власних персональних даних, які надаються для збирання, накопичення, обробку, зберігання та використання Компанії має право:</p>
                    <p className={'text-xl mt-2'}>1.1. Знаті про джерела збирання, місцезнаходження своїх персональних даних, мету їх обробки, місцезнаходження Компанії;</p>
                    <p className={'text-xl mt-2'}>1.2. Отримувати інформацію про умови надання доступу до персональних даних;</p>
                    <p className={'text-xl mt-2'}>1.3. На доступ до своїх персональних даних;</p>
                    <p className={'text-xl mt-2'}>1.4. Отримувати інформацію стосовного того, чи обробляються його персональні дані;</p>
                    <p className={'text-xl mt-2'}>1.5. пред'явлення являти вмотивовану вимогу Компанії із запереченням проти обробки своїх персональних даних;</p>
                    <p className={'text-xl mt-2'}>1.6. пред'явлення являти вмотивовану вимогу щодо зміни або знищення своїх персональних даних, якщо ці дані обробляються незаконно чи є недостовірними;</p>
                    <p className={'text-xl mt-2'}>1.7. на захист своїх персональних даних від незаконної обробки та випадкової втрати, знищення, пошкодження у зв'язку з умисним приховуванням, ненаданням чи несвоєчасним їх наданням, а також на захист від надання відомостей, що є недостовірними чи ганьблять честь, гідність та ділову репутацію фізичної особи;</p>
                    <p className={'text-xl mt-2'}>1.8. звертатися із скаргами на обробку своїх персональних даних до Уповноваженого Верховної Ради України з прав людини або до суду;</p>
                    <p className={'text-xl mt-2'}>1.9. застосовувати засоби правового захисту в разі порушення законодавства про захист персональних даних;</p>
                    <p className={'text-xl mt-2'}>1.10. вносити застереження стосовно обмеження права на обробку своїх персональних даних під час надання згоди;</p>
                    <p className={'text-xl mt-2'}>1.11. відкликати згоду на обробку персональних даних;</p>
                    <p className={'text-xl mt-2'}>1.12. знати механізм автоматичної обробки персональних даних; </p>
                    <p className={'text-xl mt-2'}>1.13. на захист від автоматизованого рішення, яке має для нього правові наслідки.</p>
                    <h3 className={'text-xl mt-4'}>
                    V. Розкриття конфіденційної інформації та Персональних даних
                    </h3>
                    <p className={'text-xl mt-2'}>1. Компанія звільняється від обов'язку дотримання Політики конфіденційності щодо Персональних даних споживача у випадку, якщо споживач самостійно публічно розголошує персональні дані.</p>
                    <p className={'text-xl mt-2'}>2. Компанія має право поширювати персональні дані споживача у випадку якщо інформація, отримана зі складу персональних страждань є суспільно необхідною, тобто є предметом суспільного інтересу, і право громадськості знати таку інформацію переважає потенційну шкоду від її поширення.</p>
                    <p className={'text-xl mt-2'}>3. Компанія має право поширювати персональні дані споживача з відповідного письмового дозволу споживача.</p>
                    <h3 className={'text-xl mt-4'}>VI. Знищення та видалення персональних даних</h3>
                    <p className={'text-xl mt-2'}>1. Персональні дані, на збирання, накопичення, обробку, зберігання та використання яких споживач надає доступ Компанії підлягають видаленню або знищенню у разі:</p>
                    <p className={'text-xl mt-2'}>- припинення правовідносин між споживачем та Компанією;</p>
                    <p className={'text-xl mt-2'}>- видання відповідного припису Уповноваженого Верховної ради з прав людини або визначених ним посадових осіб секретаріату Уповноваженого Верховної ради з прав людини;</p>
                    <p className={'text-xl mt-2'}>- набрання законної сили рішенням суду щодо видалення або знищення персональних даних.</p>
                    <div className={'flex mb-6 mt-6'}>
                        <input type="checkbox" className={'w-16'} id={'read'} checked={read} onChange={(e) => {
                            setRead(e.target.checked)
                        }}/>
                        <span className="text-xl">Я прочел всю эту хуету</span>

                    </div>
                    <button disabled={!read} className="bg-dead_violet rounded-3xl p-3 text-lg font-medium" onClick={() => {
                        dispatch(setPolicy(read))
                        router.push('/auth/signup')
                    }}>
                        Подтвердить
                    </button>
                </div>
            </div>
        </div>
    )
}