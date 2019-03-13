var express = require('express');
var router = express.Router();
var request = require("request");
var serverIP = "http://127.0.0.1:8080/appManager"
    //moke
let Mock = require('mockjs'); //引入mock模块

router.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/mescroll', function(req, res) {
    /**
     * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
     */
    var arr = ["泉州市政府", "晋江市政府", "福州市政府"]
    console.log(req.url);
    var arr2 = ["15392424781310010010001400000001", "15392424781310010010001400000002"]
    res.json(Mock.mock({
        "success": true,
        "message": null,
        "length": 10,
        "totalSize": 50,
        "data|10": [{
            "pdImg": "./res/img/pd1.jpg",
            "pdName": "【1】  六罐装荷兰美素佳儿金装2段900g",
            "pdPrice": 1149.00,
            "pdSold": 648
        }],
    }));
});


//叶酸营养需求
router.get('/app/v1/subNeeds/*', function(req, res) {
    console.log(req.body);
    res.json(Mock.mock({
        "success": true,
        "message": "请求成功",
        "data": {
            "id": "15450292149750010010001100000011",
            "english_name": "",
            "phenotypes": "",
            "chinese_name": "叶酸营养需求",
            "sex": 2,
            "del": 0,
            "item_no": 488,
            "definition": "叶酸也叫维生素B9，属于维生素B族，水溶性维生素。科学家米切尔于1941年从菠菜叶中提取纯化，故而命名为叶酸，在绿叶植物中含量丰富。",
            "classification": "",
            "risk_factors": "1.叶酸缺乏可引起情感改变，补充叶酸即可消失。孕妇缺乏叶酸，可使先兆子痫、胎盘剥离的发生率增高；患有巨幼红细胞贫血的孕妇易出现胎儿宫内发育迟缓、早产及新生儿出生体重低的情况；怀孕早期缺乏叶酸，还易引起胎儿神经管畸形（如脊柱裂、无脑畸形等）。此外，叶酸缺乏还可引起高同型半胱氨酸血症，从而增加心血管病的危险性。;;2.由于人体不会自动贮存叶酸，所以叶酸通常对于人体而言是安全的。但是，叶酸补充剂摄入过多可能导致失眠，甚至诱发中毒。",
            "clinical_manifestation": "乳糖自口腔被摄入起，经咽、胃、胆及胰等大小消化腺的作用，并不发生任何化学变化，直至小肠粘膜刷状缘肠腔侧，在乳糖酶催化下，才被水解为半乳糖和葡萄糖两种单糖，而被小肠吸收进入正常血液循环。然后在尿苷二磷酸半乳糖-4-表异构酶调节下，大部分半乳糖进入肝脏转为葡萄糖，少量由红细胞代谢或经尿液排出。",
            "diagnosis": "1.血清叶酸含量反映膳食叶酸摄入情况，小于6.8nmoL/L（3ng/ml）为缺乏。;;;;2.红细胞叶酸含量反映体内叶酸储存情况，小于318nmoL/L（140ng/ml）为缺乏。",
            "treatment": "根据《中国居民膳食指南》显示，正常成年人对叶酸的每日推荐摄入量为400μg DFE（膳食叶酸当量）。",
            "multiparty_group": 1040,
            "feasibility_suggestion": "1033;;1010;;;;常用食用油脂;;;;牛油、黄油、棕榈油、猪油、花生油等。饱和脂肪是由饱和脂肪酸和甘油形成的脂肪。饱和脂肪酸的质量越大，饱和脂肪的质量越大。;;1.充足的睡眠时间，增强身体代谢能力：睡眠时代谢率降低10%～15%，经常赖在床上容易胖。但每天睡得太少也影响代谢，睡眠时间同样是身体器官休息排毒的时间，没休息好代谢能力会减弱。;;;2.摄入足够热量，避免身体进入挨饿状态：现有体重公斤数乘以22，便是你每天所需的热量卡数。如果在饮食中摄入量减少，身体会误认为你在挨饿，需要平衡、用来维持呼吸、心跳等的基础代谢便会自动降低，反而影响身体功能的正常运转。增加身体肌肉量，提高身体代谢能力；增加消耗量会提高基础代谢率，而运动就是帮助身体苏醒的不二法门。身体里的肌肉比例越高，基础代谢率就越高，反过来说，脂肪比例越高的话，基础代谢率就越低。",
            "attention": "1.该结果不适用于临床诊断。;;2.个人的营养代谢情况是基因与环境、生活习惯等相互作用的共同结果。该检测结果仅从基因层面上对您的叶酸代谢情况进行预测，因不涉及其他因素的考虑，不代表您的真实情况。如您有营养补充相关的需要，在必要时可结合此基因检测结果咨询权威的营养学家、临床医生或专业人士，获取专业的营养建议。;;3.受限于现有样本量，该检测可能会存在一定误差。随着样本量的扩大，该检测结果会不断优化。;;4.受限于现有科技手段和科学认知水平，该检测未能覆盖所有与叶酸代谢相关的基因或位点。",
            "guide": "1032;;;小儿常用量：肌内注射。;;;治疗维生素 B12缺乏时，隔日一次，每次 25-50μg，共2周；维持量每月 1次，每次 25-50μg。;;1031;;;成人常用量：肌内注射。;;;治疗维生素 B12缺乏症，起始一日 25~100μg或隔日 50~200μg，共 2周；如伴有神经系统表现，每日用量可增加至 500μg。以后每周肌注 2次，每次 50~100μg，直到血象回复正常；维持量每月肌注 100μg。",
            "symptom": "贫血;;;胎儿发育畸形;;叶酸缺乏的早期症状可能包括：疲劳、白发、口疮溃疡、发育不良、舌头肿胀等，偶可见过敏反应，严重的一些症状包括皮疹、瘙痒、肿胀、头晕、呼吸困难等。;;;个别病人长期大量服用叶酸可出现厌食、恶心、腹胀等胃肠道症状。口服大量叶酸可很快改善巨幼红细胞性贫血和白细胞减少症，但不能阻止因维生素B12缺乏所致的神经损害的进展。如果注意到任何不正常，应该马上求医。",
            "contagious": 0,
            "morbidity1": "",
            "morbidity2": "",
            "morbidity3": "",
            "morbidity4": "",
            "gene_factor": 0.5,
            "update_time": () => Mock.Random.date('yyyy-MM-dd'),
            "remarks": "",
            "class1": 7,
            "class2": 0,
            "documents": "1. Frosst P, Blom H J, Milos R, et al. A candidate genetic risk factor for vascular disease: a common mutation in methylenetetrahydrofolate reductase.[J]. Nature Genetics, 1995, 10(1):111-113.;;2. Gaughan D J, Kluijtmans L A J, Barbaux S, et al. The methionine synthase reductase (MTRR) A66G polymorphism is a novel genetic determinant of plasma homocysteine concentrations[J]. Atherosclerosis, 2001, 157(2):451.;;3. Yang B et al. Geographical Distribution of MTHFR C677T, A1298C and MTRR A66G Gene Polymorphisms in China: Findings from 15357 Adults of Han Nationality. PLOS ONE . (2013): 8, e57917.",
            "genes": "基因 GC;;;位点 rs2282679;;;GC基因编码维生素D结合蛋白，也称为GC球蛋白，能够与各种形式的维生素D结合，可在皮肤、肝脏和肾脏之间转运维生素D的代谢产物并运送至靶器官中，与机体对维生素D的需求量相关。;;;;rs2282679位点T到G的突变，可能会降低维生素D水平，从而增加机体对维生素D的需求量。;;基因 DHCR7;;;位点 rs7944926;;;DHCR7基因编码7-羟基胆固醇还原酶，催化7-脱氢胆固醇向胆固醇的转化过程，与机体对维生素D的需求量有关。;;;;rs7944926位点A到G的突变，可能会降低维生素D的合成代谢，从而增加机体对维生素D的需求量。"
        },
        "total": 48,
        "length": 10,

    }));
});

//抗晒黑能力
router.get('/app/v1/ability/*', function(req, res) {
    console.log(req.body);
    res.json(Mock.mock({
        "success": true,
        "message": "请求成功",
        "data": {
            "id": "15450292149750010010001100000011",
            "english_name": "",
            "phenotypes": "",
            "chinese_name": "抗晒黑能力",
            "sex": 2,
            "del": 0,
            "item_no": 491,
            "definition": "晒黑反应指，当皮肤接受紫外线后，引起肌肤中黑色素合成的过程。抗晒黑反应能力较弱的人如果长时间暴露在日光下会导致皮肤晒黑。",
            "classification": "",
            "risk_factors": "①叶酸缺乏可引起情感改变，补充叶酸即可消失。孕妇缺乏叶酸，可使先兆子痫、胎盘剥离的发生率增高；患有巨幼红细胞贫血的孕妇易出现胎儿宫内发育迟缓、早产及新生儿出生体重低的情况；怀孕早期缺乏叶酸，还易引起胎儿神经管畸形（如脊柱裂、无脑畸形等）。;;②此外，叶酸缺乏还可引起高同型半胱氨酸血症，从而增加心血管病的危险性。",
            "clinical_manifestation": "2013;;;老年斑的特点;;2014;;;（1）老年斑可能影响所有皮肤类型的人，但它们在皮肤浅的人群中更常见。（2）形状多为扁平、椭圆形区域色素沉着增加；通常是棕褐色、棕色或黑色。（3）通常出现在多年来阳光照射最多的皮肤，如手背、脚、脸、肩膀或上背部。;;2013;;;什么时候需要看医生;;2014;;;老年斑通常无害，不需要医疗护理。如果存在黑暗或外观有变化的斑点，可能需要医生辅助诊断。因为这些变化可能是黑色素瘤的症状，黑色素瘤是一种严重的皮肤癌。最好是由医生评估任何新的皮肤变化，特别是如果有斑点：（1）颜色很深；（2）正在迅速扩大规模；（3）有不规则的边界；（4）有不寻常的颜色组合；（5）伴有瘙痒、发红、触痛或出血等症状。;;2013;;;老年斑形成原因;;2014;;;老年斑是由过度活跃的色素细胞引起的。紫外线（UV）可加速黑色素的产生。在经历多年频繁和长时间日晒的皮肤区域，当黑色素变得“结块”或以高浓度产生时会出现老年斑，商业晒黑灯和晒黑床的使用也有助于老年斑的发展。",
            "diagnosis": "1.血清叶酸含量反映膳食叶酸摄入情况，小于6.8nmoL/L（3ng/ml）为缺乏。;;2.红细胞叶酸含量反映体内叶酸储存情况，小于318nmoL/L（140ng/ml）为缺乏。",
            "treatment": "维生素C；双-乙基己氧苯酚甲氧苯基三嗪；氧化锌；二氧化钛；氧酸盐类；桂皮酸盐类",
            "multiparty_group": "2002",
            "feasibility_suggestion": "抗氧化食物：;;;1.番茄：番茄中含有丰富的茄红素，茄红素具有抗氧化功能。另外，番茄应怎样食用才能对抗氧化更有效呢？那便是熟吃。虽然经烹调或加工过的番茄(番茄酱、番茄汁、罐装番茄)所含的维生素C会遭到破坏，但是茄红素的含量可增加数倍，抗氧化功能也更超强。;;;2.葡萄：葡萄籽中的花青配糖体，其抗氧化能力是维生素C的20倍、维生素E的50倍，可以达到抗氧化的目的。;;;3.鲑鱼：味美好吃的鲑鱼中因含有超强的omega-3多元不饱和脂肪酸，所以有超强的抗氧化功效。;;2011",
            "attention": "1.个人的皮肤特征情况是基因与环境、生活习惯等相互作用的共同结果。本检测只从基因层面上评估您的皮肤抗晒黑反应能力，因不涉及其他因素的考虑，不代表您的真实情况。;;2.受限于现有科技手段和科学认知水平，该检测可能不能覆盖皮肤抗晒黑反应能力相关的所有基因或位点。",
            "guide": "1.护肤建议：;;;;a. 使用正确的护肤步骤：在护肤的过程中，我们要做的是先补水后保湿。一般的护肤步骤，补水——爽肤水或化妆水给皮肤补充水分；保湿——精华、乳液、面霜，巩固形成肌肤的保护膜，从而紧紧锁住水分。而面膜一般是以补水为主，敷完面膜后一定要记得及时做护肤，彻底保湿。;;;;b. 不同肤质的护肤管理：针对敏感性肌肤，最好选择不含有铅汞的保湿产品；对于油脂性肌肤，要注意清洁、控油、补水整合；混合性肌肤最好根据不同地区的气候状况和当天的皮肤状况调整保养方案。;;;2.生活建议：;;;;a. 记得早上洗脸的时候用温和的流动水清洗，肌肤表面的保护膜才不被破坏。;;;;b. 每天一定要补充充足的白开水，千万不要等渴了才想起喝水。;;;;c. 忌辛辣，忌油腻的食品。少喝酒，尽量不去抽烟，对皮肤有伤害。;;2012",
            "symptom": "细纹;;;灼伤;;;皮肤癌;;当皮肤接受紫外线过度暴晒后，会损伤表皮细胞；活化酪胺酸酶，加速色素合成，破坏皮肤的保湿功能，使皮肤变得干燥，让真皮层中的弹力纤维受损，使细纹产生，在强烈照射下，还会造成肌肤发炎、灼伤。有异常情形时，则会变成色素性的皮肤癌等。",
            "contagious": 0,
            "morbidity1": "",
            "morbidity2": "",
            "morbidity3": "",
            "morbidity4": "",
            "gene_factor": 0.5,
            "update_time": () => Mock.Random.date('yyyy-MM-dd'),
            "remarks": "",
            "class1": 7,
            "class2": 0,
            "documents": "1.Vierkötter, Andrea, Schikowski T , Sugiri D , et al. MMP-1 and -3 promoter variants are indicative of a common susceptibility for skin and lung aging : results from a cohort of elderly women (SALIA)[J]. Journal of Investigative Dermatology, 2015, 135(5):1268-1274.;;2.Genome-wide association study identifies three novel susceptibility loci for severe Acne vulgaris[J]. Nature Communications, 2014, 5.",
            "genes": "基因 GC;;;位点 rs2282679;;;GC基因编码维生素D结合蛋白，也称为GC球蛋白，能够与各种形式的维生素D结合，可在皮肤、肝脏和肾脏之间转运维生素D的代谢产物并运送至靶器官中，与机体对维生素D的需求量相关。;;;;rs2282679位点T到G的突变，可能会降低维生素D水平，从而增加机体对维生素D的需求量。;;基因 DHCR7;;;位点 rs7944926;;;DHCR7基因编码7-羟基胆固醇还原酶，催化7-脱氢胆固醇向胆固醇的转化过程，与机体对维生素D的需求量有关。;;;;rs7944926位点A到G的突变，可能会降低维生素D的合成代谢，从而增加机体对维生素D的需求量。"
        },
        "total": 48,
        "length": 10,

    }));
});

//天赋能力
router.get('/app/v1/tanletDetails/*', function(req, res) {
    console.log(req.body);
    res.json(Mock.mock({
        "success": true,
        "message": "请求成功",
        "data": {
            "id": "15450388254840010010001100000011",
            "english_name": "",
            "phenotypes": "",
            "chinese_name": "记忆",
            "sex": 2,
            "del": 0,
            "item_no": 499,
            "definition": "记忆是指人类心智活动的一种，属于心理学或脑部科学的范畴。记忆是识记、保持、再认识和重现客观事物所反映的内容和经验的能力，代表着一个人对过去活动、感受、经验的印象累积。",
            "classification": "",
            "risk_factors": "",
            "clinical_manifestation": "1.一般来说，上午9～11时，下午3～4时，晚上9～10时，为最佳记忆时间。利用上述时间记忆难记的学习材料，效果较好。;;2.学习材料在记住的基础上，多记几遍，达到熟记、牢记的程度。;;3.遗忘的速度是先快后慢。对刚学过的知识，趁热打铁，及时温习巩固，是强化记忆痕迹、防止遗忘的有效手段。;;4.记忆时只要聚精会神、专心致志，排除杂念和外界干扰，大脑皮层就会留下深刻的记忆痕迹而不容易遗忘。;;5.在保证营养、积极休息、进行体育锻炼等保养大脑的基础上，科学用脑，防止过度疲劳，保持积极乐观的情绪，能大大提高大脑的工作效率。",
            "diagnosis": "",
            "treatment": "蜂蜜有助于延缓衰老，减轻焦虑；牛奶富含蛋白质、钙，以及大脑所必需的氨基酸；鸡蛋可以向机体供给足够的胆碱；鱼类提供优质蛋白质和钙；花生富含卵磷脂和脑磷脂；小米含较多的维生素B1和B2；玉米胚中富含亚油酸等多种不饱和脂肪酸和谷氨酸；菠菜中含有丰富的维生素A、C、B1和B2；菠萝含有很多维生素C和微量元素锰，而且热量少；大豆含大脑所需的优质蛋白和八种人体必需的氨基酸；龙眼含有磷脂和胆碱，有助于神经功能的传导。;;3018",
            "multiparty_group": "3001",
            "feasibility_suggestion": "科研人员、教师、文秘、翻译、会计师",
            "attention": "1.世界记忆冠军、武汉大学学生王峰刷新记忆心理学实验记录。对着电脑屏幕上呈现的每秒1个的数字，最终，他一口气记住了200个，大大刷新了80个的世界纪录。;;2.年仅10岁的燕柳小学五年级四班的闫家硕1个小时能记住1080个无规则的数字、能正确记忆646张打乱顺序的扑克牌，在 “第24届世界脑力锦标赛”上，她新晋为“世界记忆大师”。那时，全国不到300名获此称号的记忆大师中，10岁的她是年龄最小的。;;3.央视著名主持人董卿站在全国乃至全世界人民面前，直播着年年不同的春节联欢晚会，至始至终几乎无一点差错地将节目主持到底。",
            "guide": "",
            "symptom": "",
            "contagious": 0,
            "morbidity1": "",
            "morbidity2": "",
            "morbidity3": "",
            "morbidity4": "",
            "gene_factor": 0.5,
            "update_time": "2018/12/17  PM 5:27:05",
            "remarks": "",
            "class1": 7,
            "class2": 0,
            "genes": "基因 GC;;;位点 rs2282679;;;GC基因编码维生素D结合蛋白，也称为GC球蛋白，能够与各种形式的维生素D结合，可在皮肤、肝脏和肾脏之间转运维生素D的代谢产物并运送至靶器官中，与机体对维生素D的需求量相关。;;;;rs2282679位点T到G的突变，可能会降低维生素D水平，从而增加机体对维生素D的需求量。;;基因 DHCR7;;;位点 rs7944926;;;DHCR7基因编码7-羟基胆固醇还原酶，催化7-脱氢胆固醇向胆固醇的转化过程，与机体对维生素D的需求量有关。;;;;rs7944926位点A到G的突变，可能会降低维生素D的合成代谢，从而增加机体对维生素D的需求量。",
            "documents": "1.Shaun A, et al (2014). High-dose vitamin C supplementation increases skeletal muscle vitamin C concentration and SVCT2 transporter expression but does not alter redox status in healthy males. Free Radic Biol Med.;;2.Duell E J et al. Vitamin C transporter gene (SLC23A1 and SLC23A2) polymorphisms, plasma vitamin C levels, and gastric cancer risk in the EPIC cohort.Genes Nutr. 2013 Nov;8(6):549-60.;;3.Timpson N J et al. Genetic variation at the SLC23A1 locus is associated with circulating concentrations of L-ascorbic acid (vitamin C): evidence from 5 independent studies with >15,000 participants. Am J Clin Nutr. 2010 Aug;92(2):375-82."
        },
    }));
});

//7.2获取class1数量/class2数量/部分信息  *用户名
router.get('/app/v2/user/*/reportCount', function(req, res) {
    console.log(req.query);
    if (!req.query.class2) { //如果class2不存在
        res.json(Mock.mock({
            "success": true,
            "message": "请求成功",
            "data": [{
                    "class2": 1,
                    "count": 4
                },
                {
                    "class2": 2,
                    "count": 5
                },
                {
                    "class2": 3,
                    "count": 0
                }
            ],
        }));
    } else {
        res.json(Mock.mock({ //class1  class2 都存在
            "success": true,
            "message": "请求成功",
            "data": [{
                    "chinese_name": "维生素D营养需求",
                    "order": 0,
                    "pro_item_id": "15450292149640010010001100000011",
                    "pro_report_id": "15371533407370010010000400000011",
                    "ranking": 0,
                    "times": 0,
                    "value": 52
                },
                {
                    "chinese_name": "叶酸营养需求",
                    "order": 0,
                    "pro_item_id": "15450292149750010010001100000011",
                    "pro_report_id": "15371533407370010010000400000011",
                    "ranking": 0,
                    "times": 0,
                    "value": 13
                },
                {
                    "chinese_name": "刘紫陆",
                    "order": 0,
                    "pro_item_id": "15450292149550010010001100000011",
                    "pro_report_id": "15371533407370010010000400000011",
                    "ranking": 0,
                    "times": 0,
                    "value": 13
                },
            ]
        }));
    }

});

//获取用户报告信息
router.get('/app/v2/user/*/report/*/item/*', function(req, res) {
    console.log(req.body);
    res.json(Mock.mock({
        "success": true,
        "message": "请求成功",
        // "data": [{
        //     "beta_level": 0,
        //     "chinese_name": "维生素D营养需求",
        //     "class1": 5,
        //     "class2": 3,
        //     "cnmorbidity": 0,
        //     "del": 0,
        //     "desc": 0,
        //     "genes": [{
        //             "snp": "rs2282679",
        //             "type": "CGC"
        //         },
        //         {
        //             "snp": "rs7944926",
        //             "type": "GGG"
        //         }
        //     ],
        //     "id": "15460641556780010010003400000011",
        //     "item_level": 0,
        //     "morbidity": 0,
        //     "order": 0,
        //     "pro_item_id": "15450292149640010010001100000011",
        //     "pro_report_id": "15371533407370010010000400000011",
        //     "ranking": 0,
        //     "times": 0,
        //     "update_time": "2018-12-29 14:15:55",
        //     "value": 13
        // }],
        data: [{
            beta_level: 0,
            chinese_name: "母系祖源",
            class1: 4,
            class2: 0,
            cnmorbidity: 0,
            del: 0,
            desc: 0,
            haplogroup: "B4h",
            id: "15501964240390010010003400014251",
            item_level: 0,
            morbidity: 0,
            order: 0,
            pro_item_id: "15365604799420010010001100000001",
            pro_report_id: "15371533174320010010000400000011",
            ranking: 0,
            times: 0,
            update_time: "2019-02-15 10:07:04",
            value: 0,
            way: "L-L3-N-R-B-B4"
        }],
    }));
});

// 4.3根据id获取检测项genes
router.get('/app/v1/proItem/filter', function(req, res) {
    console.log(req.body);
    res.json(Mock.mock({
        "success": true,
        "message": "请求成功",
        "data": [{
            "genes": "基因 GC;;;位点 rs2282679;;;GC基因编码维生素D结合蛋白，也称为GC球蛋白，能够与各种形式的维生素D结合，可在皮肤、肝脏和肾脏之间转运维生素D的代谢产物并运送至靶器官中，与机体对维生素D的需求量相关。;;;;rs2282679位点T到G的突变，可能会降低维生素D水平，从而增加机体对维生素D的需求量。;;基因 DHCR7;;;位点 rs7944926;;;DHCR7基因编码7-羟基胆固醇还原酶，催化7-脱氢胆固醇向胆固醇的转化过程，与机体对维生素D的需求量有关。;;;;rs7944926位点A到G的突变，可能会降低维生素D的合成代谢，从而增加机体对维生素D的需求量。"
        }]
    }));
});

// test
router.get('/test', function(req, res) {
    console.log(req.body);
    res.json(Mock.mock({
        "success": true,
        "message": "请求成功",
        "data": [{
            "genes": "基因 GC;;;位点 rs2282679;;;GC基因编码维生素D结合蛋白，也称为GC球蛋白，能够与各种形式的维生素D结合，可在皮肤、肝脏和肾脏之间转运维生素D的代谢产物并运送至靶器官中，与机体对维生素D的需求量相关。;;;;rs2282679位点T到G的突变，可能会降低维生素D水平，从而增加机体对维生素D的需求量。;;基因 DHCR7;;;位点 rs7944926;;;DHCR7基因编码7-羟基胆固醇还原酶，催化7-脱氢胆固醇向胆固醇的转化过程，与机体对维生素D的需求量有关。;;;;rs7944926位点A到G的突变，可能会降低维生素D的合成代谢，从而增加机体对维生素D的需求量。"
        }]
    }));
});

module.exports = router;