const data = {
  health: [
    {
      "id": `vitamin-balance`,
      "title": `Витаминный <br> баланс`,
      "price": `7 000`,
      "label": `Здоровье`,
      "description": `Коктейль позволяет в короткие сроки улучшить состояние кожи и волос, почувствовать прилив сил. Включает в себя индивидуальный комплекс витаминов необходимых организму.`,
      "compound": `комплекс водорастворимых и жирорастворимых витаминов, коэнзим Q10`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `balance-iron`,
      "title": `Баланс <br> железа`,
      "price": `5 500`,
      "label": `Здоровье`,
      "description": `Капельница показана при недостатке железа. Эффективно борется с последствиями анемии, способствуя восстановлению здоровья и жизненных сил.`,
      "compound": `препарат железа.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `balance-iron-plus`,
      "title": `Баланс <br> железа +`,
      "price": `7 000`,
      "label": `Здоровье`,
      "description": `Капельница рекомендуется при недостатке железа и успешно борется с последствиями анемии, способствуя восстановлению здоровья и жизненной энергии. Дополнительный препарат этоксидол, входящий в состав коктейля, укрепляет устойчивость организма к стрессу, а витамин С содействует лучшему усвоению железа.`,
      "compound": `антиоксиданты, препарат железа, витамин С.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `antistress`,
      "title": `Антистресс`,
      "price": `9 000`,
      "label": `Здоровье`,
      "description": `Обогатит организм необходимыми витаминами, поддержит здоровье нервной системы. Благодаря сбалансированному составу оказывает антистрессовое действие и придает ощущение легкости.`,
      "compound": `сбалансированный комплекс витаминов, микроэлементы, аминокислоты.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `smart`,
      "title": `Смарт`,
      "price": `7 500`,
      "label": `Здоровье`,
      "description": `Этот коктейль улучшает когнитивные функции и общую работу мозга. Капельница помогает в том случае, если у вас появились такие симптомы как забывчивость, невозможность сосредоточиться, ухудшилась память, появился «туман в голове».`,
      "compound": `препараты улучшающие микроциркуляцию сосудов, пептиды, ноотроп.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `healthy-vessels`,
      "title": `Здоровые <br> сосуды`,
      "price": `7 500`,
      "label": `Здоровье`,
      "description": `Этот коктейль помогает восстановить здоровье сосудов. Оказывает метаболический эффект, улучшает микроциркуляцию сосудов и кровообращение в тканях головного мозга, снижает артериальное давление. Нормализует сердечный и почечный кровоток, умеренно повышает иммунные функции организма.`,
      "compound": `аминокислоты, антиоксиданты, пептиды`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `energy-boost`,
      "title": `Энергетический <br> буст`,
      "price": `7 000`,
      "label": `Здоровье`,
      "description": `Этот коктейль обладает широким спектром действия. Препараты, входящие в состав капельницы дают энергию митохондриям. Уменьшаются симптомы физического перенапряжения, увеличивается толерантность к физической нагрузке, улучшаются общее самочувствие и настроение.`,
      "compound": `милдронат, антиоксиданты, витамины, аминокислоты.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `antihistamine`,
      "title": `Анти <br> гистаминная`,
      "price": `7 000`,
      "label": `Здоровье`,
      "description": `Этот коктейль помогает в считанные минуты устранить симптомы аллергии. Уменьшает зуд и отечность, умеренно повышает иммунитет.`,
      "compound": `аминокислоты, витамины, магний.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `immunity`,
      "title": `Иммунитет`,
      "price": `4 500`,
      "label": `Здоровье`,
      "description": `Этот коктейль усиливает защитные функции организма, устраняет хроническую усталость и снижает температуру, симптомы одышки и учащенного сердцебиения.
      При начальной стадии заболевания помогает быстро купировать симптомы.`,
      "compound": `полиоксидоний — иммуномодулятор комплексного действия, витамин С.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `liver-protection`,
      "title": `Защита <br> печени`,
      "price": `9 000`,
      "label": `Здоровье`,
      "description": `Действие капельницы направлено на восстановление функций печени, вывод токсинов, улучшение общего состояния. Рекомендуется делать курсом для достижения наиболее сильного эффекта. Коктейль обладает антидепрессивным, желчегонным, нейропротекторным и спазмолитическим действием.`,
      "compound": `гептрал`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `healthy-sleep`,
      "title": `Здоровый <br> сон`,
      "price": `7 000`,
      "label": `Здоровье`,
      "description": `Этот коктейль воздействует на нервную систему. Уже после первой процедуры у вас улучшится сон и снизится фоновая тревожность. Благодаря комплексному составу после прохождения курса капельниц “Здоровый сон” вы с большой вероятностья восстановите свой режим дня и будете чувствовать себя бодрее.`,
      "compound": `гептрал, пикамилон, магний.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    },
    {
      "id": `ARVI-help`,
      "title": `ОРВИ <br> help`,
      "price": `7 000`,
      "label": `Здоровье`,
      "description": `Этот коктейль направлен на лечение вирусных заболеваний. Снижает температуру, облегчает дыхание, снимает ломоту в теле. Поможет значительно снизить симптомы простуды и гриппа.`,
      "compound": `янтарная кислота, витамин С, иммуномодулирующий препарат`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/5YnMPq5/image.png`
    }
  ],
  sport: [
    {
      "id": `milanese-cocktail`,
      "title": `Миланский <br> коктейль`,
      "price": `17 000`,
      "label": `Спорт`,
      "description": `Быстро восстанавливает физическое и психоэмоциональное состояние после длительных, изнуряющих физических нагрузок.\n\nЭффективно выводит токсины.\n\nУлучшает обмен веществ, запускает метаболизм\n\nСнимает хроническую усталость.\n\nРекомендован спортсменам в период тяжёлых нагрузок, а также в тех видах спорта, где основными показателями результативности являются скорость и выносливость.\n\nЭтот коктейль рекомендуется проводить курсом из 7 процедур. Это связано с тем, что сочетание препаратов в каждой ступени составлено таким образом, что при последовательном применении они дополняют и усиливают друг друга.`,
      "compound": `глутатион, эзафосфина, префолик, инозин. Комплекс витаминов группы В, витамин С`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/hcr89Fj/image.png`
    },
    {
      "id": `sport`,
      "title": `Спорт`,
      "price": `8 000`,
      "label": `Спорт`,
      "description": `Поможет быстрее восстановиться после тренировок и улучшить спортивные показатели. Также коктейль “Спорт” поддержит вас на пути к идеальному весу и прекрасному самочувствию.`,
      "compound": `препараты, повышающие выносливость, витамины, микроэлементы.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/hcr89Fj/image.png`
    },
    {
      "id": `protein-booster`,
      "title": `Протеиновый <br> бустер`,
      "price": `7 000`,
      "label": `Спорт`,
      "description": `Коктейль поможет восполнить дефицит белка и микроэлементов. Ускоряет процесс восстановления и заряжает энергией, силами и хорошим настроением.`,
      "compound": `аминокислоты, микроэлементы`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/hcr89Fj/image.png`
    },
    {
      "id": `hydration`,
      "title": `Гидратация`,
      "price": `3 500`,
      "label": `Спорт`,
      "description": `Коктейль направлен на восстановление водно-солевого баланса организма. Нейтрализует следы болезни, восполнит потери жидкости. Прекрасно подходит для спортсменов для восстановления после соревнований.`,
      "compound": `<b>В состав этой капельницы входит препарат, восполняющий водно-солевой баланс.</b>`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/hcr89Fj/image.png`
    },
    {
      "id": `fatigue-away`,
      "title": `Усталость прочь`,
      "price": `10 000`,
      "label": `Спорт`,
      "description": `Эта капельница поможет зарядиться энергией, избавиться от хронической усталости, улучшит микроциркуляцию сосудов. Вы почувствуете прилив сил и энергии.`,
      "compound": `антиоксиданты, препараты улучшающие работу митохондрий, витамины группы В, ноотропный препарат.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/hcr89Fj/image.png`
    }
  ], 
  detox: [
    {
      "id": `after-party`,
      "title": `После <br> вечеринки`,
      "price": `9 000`,
      "label": `Детокс`,
      "description": `Поможет быстро восстановить силы после вечеринки. Снимает симптомы мышечной и головной боли. Способствует выведению токсинов, улучшает самочувствие.`,
      "compound": `янтарная кислота, витамины, антиоксиданты.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/310SzX0/image.png`
    },
    {
      "id": `detox-light`,
      "title": `Детокс <br> light`,
      "price": `6 500`,
      "label": `Детокс`,
      "description": `Выводит токсины, заметно улучшает самочувствие. Рекомендуется при восстановлении после болезни, оперативного вмешательства для поддержания организма.`,
      "compound": `комплекс витаминов, янтарная кислота.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/310SzX0/image.png`
    },
    {
      "id": `detox-plus`,
      "title": `Детокс <br> +`,
      "price": `10 000`,
      "label": `Детокс`,
      "description": `Авторский коктейль IV Therapy Moscow поможет как при алкогольной интоксикации, так и после перенесенной инфекции, облегчит состояние после длительного приёма лекарственных средств. Положительные изменения станут ощутимыми сразу после процедуры.`,
      "compound": `янтарная кислота, глутатион, гептрал.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/310SzX0/image.png`
    }
  ],
  beauty: [
    {
      "id": `fat-burningy`,
      "title": `Жиросжигание`,
      "price": `6 500`,
      "label": `Красота`,
      "description": `Специальный коктейль от IV Therapy, который направлен на снижение жировой массы и ускорение метаболизма. Компоненты капельницы “запускают” метаболизм, что позволяет быстро сбросить лишние килограммы.`,
      "compound": `антиоксиданты, препараты, ускоряющие обмен веществ, витамин С, аминокислоты.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/dPLWLgP/image.png`
    },
    {
      "id": `anti-age`,
      "title": `anti-age`,
      "price": `7 000`,
      "label": `Красота`,
      "description": `Этот коктейль активно борется с признаками старения кожи. Капельница оказывает мощный омолаживающий эффект, улучшает тургор кожи, уменьшает пигментацию, очищает организм, придает сил и энергии.`,
      "compound": `глутатион, витамин С.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/dPLWLgP/image.png`
    },
    {
      "id": `healthy-hair`,
      "title": `Здоровые <br> волосы`,
      "price": `8 500`,
      "label": `Красота`,
      "description": `Капельница поможет восстановить волосы, придать им красоту и гладкость, особенно эффективна при активном выпадении волос. Коктейль направлен на комплексное восстановление и улучшение качества волос. Курс капельниц “Здоровые волосы” уменьшит выпадение волос и сделает ваши волосы гладкими и блестящими.`,
      "compound": `комплекс витаминов, микроэлементов, аминокислоты`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/dPLWLgP/image.png`
    },
    {
      "id": `beauty-plus`,
      "title": `Красота+`,
      "price": `10 000`,
      "label": `Красота`,
      "description": `Этот коктейль применяется в случае нежелательной пигментации, помогает снизить вес и улучшить настроение. Коктейль снимает симптомы хронической усталости, оказывает  комплексное воздействие на общее оздоровление организма. Благоприятно влияет на нервную систему. Способствует регулированию уровня глюкозы в крови.`,
      "compound": `глутатион, витамин С, альфа-липоевая кислота.`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/dPLWLgP/image.png`
    },
    {
      "id": `beautiful-skin`,
      "title": `Красивая кожа`,
      "price": `13 000`,
      "label": `Красота`,
      "description": `Эффективный коктейль, который направлен на улучшение состояния кожи. Защищает кожу от сухости, нейтрализует пигментные пятна, оздоравливает весь организм. Подарит ваше коже естественное сияние и отдохнувший вид.`,
      "compound": `антиоксиданты, глутатион`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/dPLWLgP/image.png`
    },
    {
      "id": `omega`,
      "title": `Омега`,
      "price": `10 000`,
      "label": `Омега`,
      "description": `Этот  коктейль позволит восполнить дефицит ОМЕГА-3 и жирорастворимых витаминов, позволит быстро восстановиться после косметических процедур`,
      "compound": `препарат омега 3 , витамины А, Д, Е, К`,
      "time": `от 30 до 90 минут.`,
      "img": `https://i.ibb.co/dPLWLgP/image.png`
    }
  ]
}

export default data;