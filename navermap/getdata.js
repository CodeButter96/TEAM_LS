var http = require('http'); // node 내장 모듈 불러옴

var request = require('request');

var express = require('express');
var app = express();

var lat = "37.29640641606932";
var lon = "126.9776123527779";
var query = "정자동 178-1";

var url = "http://zzangbaguni.shop/goods";



var queryParams = '?' + encodeURIComponent('latitude') + '=' + encodeURIComponent(lat);
queryParams += "&" + encodeURIComponent('longitude') + "=" + encodeURIComponent(lon);

var urlq = url + queryParams;

var goods;

function gettest(url){
	return new Promise(resolve=>{
		request.get({
			uri:url
		},function (error, response, body) {
			var bdjs = JSON.parse(body); //json으로 파싱
			//console.log(bdjs);
			//goods = JSON.parse(bdjs['goods']);
			//console.log(goods);
			//var bdstr = JSON.stringify(bdjs);
			//console.log(bdstr);
			//distance = bdjs.route.trafast[0].summary.distance;
			//console.log(distance);
			resolve(goods);
		})	
	})
	
};
var testtest;
gettest(urlq).then(function(result){
	//console.log(result);
	testtest=goods;
});
console.log(testtest);
/*
console.log(
	gettest(urlq)
		.then(function(result){
		return result
}));*/

/******
{"goods":[{"goodId":24,"goodName":"마일드참치(3개)","goodSmlclsCode":30202004},{"goodId":35,"goodName":"해표 꽃소금(1kg)","goodSmlclsCode":30204006},{"goodId":104,"goodName":"도브 뷰티바(4개)","goodSmlclsCode":30301006},{"goodId":217,"goodName":"JB 뉴 베드타임 로션(500ml)","goodSmlclsCode":30301001},{"goodId":523,"goodName":"썬 부탄가스(4개)","goodSmlclsCode":30302015},{"goodId":536,"goodName":"청정원 순창 양념듬뿍 쌈장(500g)","goodSmlclsCode":30204016},{"goodId":538,"goodName":"게토레이 레몬(600ml)","goodSmlclsCode":30206019},{"goodId":168,"goodName":" 생야채돼지고기물만두(800g)","goodSmlclsCode":30201005},{"goodId":36,"goodName":"산들애 국내산 해물(250g)","goodSmlclsCode":30204008},{"goodId":67,"goodName":"국산아작아작콩나물(350g)","goodSmlclsCode":30102005},{"goodId":265,"goodName":"참 이슬 클래식(360ml)","goodSmlclsCode":30206013},{"goodId":246,"goodName":"돼지고 기 삼겹살(100g)","goodSmlclsCode":30101004},{"goodId":247,"goodName":"쇠고기 불 고기(1+등급, 100g)","goodSmlclsCode":30101002},{"goodId":248,"goodName":"쇠고기 등심(1+등급, 100g)","goodSmlclsCode":30101002},{"goodId":252,"goodName":"마일드 참치(150g)","goodSmlclsCode":30202004},{"goodId":254,"goodName":"해표 맑고 신선 한 식용유(900ml)","goodSmlclsCode":30204005},{"goodId":257,"goodName":"백설 하얀설탕(1kg)","goodSmlclsCode":30204007},{"goodId":269,"goodName":"남양유업 맛있는 우유GT(1L)","goodSmlclsCode":30203005},{"goodId":225,"goodName":"오뚜기 참기름(320ml)","goodSmlclsCode":30204004},{"goodId":229,"goodName":"진간장 금F3(930ml)","goodSmlclsCode":30204011},{"goodId":230,"goodName":"오뚜기 고소한 골드 마요네즈(500g)","goodSmlclsCode":30204012},{"goodId":233,"goodName":"카스 프레쉬(6캔)","goodSmlclsCode":30206012},{"goodId":237,"goodName":"삼양라면(5개입)","goodSmlclsCode":30201011},{"goodId":238,"goodName":"진라면 순한맛(5개입)","goodSmlclsCode":30201011},{"goodId":239,"goodName":"옛날국수 소면(900g)","goodSmlclsCode":30201009},{"goodId":241,"goodName":"포스트 콘푸라이트(600g)","goodSmlclsCode":30201010},{"goodId":144,"goodName":"하림 토종닭백숙(1.05kg)","goodSmlclsCode":30101003},{"goodId":298,"goodName":"3분 쇠고기카레(200g)","goodSmlclsCode":30201004},{"goodId":174,"goodName":"비타500(10개입)","goodSmlclsCode":30206001},{"goodId":302,"goodName":"배추(1.5~2kg)","goodSmlclsCode":30102001},{"goodId":305,"goodName":"3분 쇠고기짜장(200g)","goodSmlclsCode":30201004},{"goodId":300,"goodName":"맥심 티오피 마스터 라떼(275ml)","goodSmlclsCode":30206002},{"goodId":201,"goodName":"매일유업 뼈로가는 칼슘치즈(270g)","goodSmlclsCode":30203007},{"goodId":334,"goodName":"동서현미녹차(100개입)","goodSmlclsCode":30206004},{"goodId":422,"goodName":"국순당 우국생(750ml)","goodSmlclsCode":30206016},{"goodId":423,"goodName":"서울장수생막걸리(750ml)","goodSmlclsCode":30206016},{"goodId":557,"goodName":"곰표 밀가루 중력다목적용(1kg)","goodSmlclsCode":30201007},{"goodId":562,"goodName":"해찬들 사계절 쌈장(500g)","goodSmlclsCode":30204016},{"goodId":624,"goodName":" 참이슬 후레쉬(360ml)","goodSmlclsCode":30206013},{"goodId":821,"goodName":"백설 소면(900g)","goodSmlclsCode":30201009},{"goodId":832,"goodName":"켈로그 콘푸로스트(600g)","goodSmlclsCode":30201010},{"goodId":833,"goodName":"오뚜기 3분 백세카레 약간 매운맛(200g)","goodSmlclsCode":30201004},{"goodId":834,"goodName":"오뚜 기밥(210g)","goodSmlclsCode":30201014},{"goodId":852,"goodName":"샘표 시골집 토 장(900g)","goodSmlclsCode":30204010},{"goodId":853,"goodName":"복음자리 딸기잼(370g)","goodSmlclsCode":30204015},{"goodId":854,"goodName":"동서벌꿀(600g)","goodSmlclsCode":30204002},{"goodId":855,"goodName":"동서 아카시아꿀(600g)","goodSmlclsCode":30204002},{"goodId":856,"goodName":"백설 자일로스 설탕(1kg)","goodSmlclsCode":30204007},{"goodId":860,"goodName":"CJ 행복한콩 국산콩 콩나물(280g)","goodSmlclsCode":30102005},{"goodId":866,"goodName":"몽쉘 크림(384g)","goodSmlclsCode":30205005},{"goodId":869,"goodName":"남양 17차 티백(80개입)","goodSmlclsCode":30206004},{"goodId":870,"goodName":"달콤한 삼육두유 B","goodSmlclsCode":30206011},{"goodId":876,"goodName":"삼다수(500ml)","goodSmlclsCode":30206007},{"goodId":878,"goodName":"아이시스(500ml)","goodSmlclsCode":30206007},{"goodId":889,"goodName":"화이트 시크릿홀 날개 중형(36개입)","goodSmlclsCode":30301013},{"goodId":894,"goodName":"PACE6 스타일 면도날(4개)","goodSmlclsCode":30301017},{"goodId":899,"goodName":"어드밴스 캐비티 블루(120g)","goodSmlclsCode":30301007},{"goodId":900,"goodName":"어드밴스 캐비티 블루(3개)","goodSmlclsCode":30301007},{"goodId":902,"goodName":"페리오 캐비티케어(3개)","goodSmlclsCode":30301007},{"goodId":532,"goodName":"오뚜기 크림스프(80g)","goodSmlclsCode":30201019},{"goodId":569,"goodName":"하림 자연실록백숙(830g)","goodSmlclsCode":30101003},{"goodId":224,"goodName":"서울우유 흰우유(1L)","goodSmlclsCode":30203005},{"goodId":266,"goodName":"처 음처럼(360ml)","goodSmlclsCode":30206013},{"goodId":638,"goodName":"해찬들 우리 쌀태양초골드(1kg)","goodSmlclsCode":30204009},{"goodId":614,"goodName":"참크래커(280g)","goodSmlclsCode":30205002},{"goodId":830,"goodName":"보노 콘스프(3개입)","goodSmlclsCode":30201019},{"goodId":872,"goodName":"카스 프레쉬(500ml)","goodSmlclsCode":30206012},{"goodId":874,"goodName":"삼다수(2L)","goodSmlclsCode":30206007},{"goodId":880,"goodName":"파워에이드 마운틴블라스트(520ml)","goodSmlclsCode":30206019},{"goodId":881,"goodName":"포카리스웨트(620ml)","goodSmlclsCode":30206019},{"goodId":891,"goodName":"아이!깨끗해 항균폼 상큼레몬향(250ml)","goodSmlclsCode":30301021},{"goodId":905,"goodName":"크린랩 고무장갑 중(2세트)","goodSmlclsCode":30302008},{"goodId":921,"goodName":"갈치(생물, 100g)","goodSmlclsCode":30103001},{"goodId":924,"goodName":"고등어(생물, 300~500g)","goodSmlclsCode":30103003},{"goodId":925,"goodName":"오징어(생물, 200~300g)","goodSmlclsCode":30103004},{"goodId":927,"goodName":"시금치(250~400g)","goodSmlclsCode":30102007},{"goodId":928,"goodName":"당근(흙당근, 100g)","goodSmlclsCode":30102008},{"goodId":935,"goodName":"대파(흙대파, 500~800g)","goodSmlclsCode":30102015},{"goodId":141,"goodName":"오뚜기밥(6개입) ","goodSmlclsCode":30201014},{"goodId":143,"goodName":"코카콜라(1.8L)","goodSmlclsCode":30206005},{"goodId":157,"goodName":"쇠고기 불 고기(1등급, 100g)","goodSmlclsCode":30101002},{"goodId":243,"goodName":"오뚜기  부침가루(1kg)","goodSmlclsCode":30201012},{"goodId":253,"goodName":"오뚜기 콩기 름 100%(900ml)","goodSmlclsCode":30204005},{"goodId":14,"goodName":"청정원 맛선 생 국내산해물(250g)","goodSmlclsCode":30204008},{"goodId":120,"goodName":"청정원 고소한 마요네즈(500g)","goodSmlclsCode":30204012},{"goodId":572,"goodName":"동 원참치 라이트스탠다드(150g)","goodSmlclsCode":30202004},{"goodId":537,"goodName":"해표 순창궁 양념쌈장(500g)","goodSmlclsCode":30204016},{"goodId":280,"goodName":"순창 오리지널 우리쌀 찰고추장(1kg)","goodSmlclsCode":30204009},{"goodId":333,"goodName":"오뚜기카레 순한맛(100g)","goodSmlclsCode":30204014},{"goodId":445,"goodName":"미쟝센 쉽고빠른거품염색 3N 흑갈색(40g)","goodSmlclsCode":30301020},{"goodId":553,"goodName":"신라면(5개입)","goodSmlclsCode":30201011},{"goodId":570,"goodName":"드봉 스위트로즈(4개)","goodSmlclsCode":30301006},{"goodId":308,"goodName":"크린랩(22cm x 50m)","goodSmlclsCode":30302009},{"goodId":719,"goodName":" 프리미엄 산양분유 1단계(800g)","goodSmlclsCode":30203006},{"goodId":759,"goodName":"하이트 엑스트라 콜드(6캔)","goodSmlclsCode":30206012},{"goodId":681,"goodName":"맥스 부탄가스(4개)","goodSmlclsCode":30302015},{"goodId":697,"goodName":"리 엔 흑모비책크림염색 자연갈색(60g)","goodSmlclsCode":30301020},{"goodId":707,"goodName":"쏘피 바디피트 볼록맞춤 날개 중형(32개입)","goodSmlclsCode":30301013},{"goodId":736,"goodName":"맥스웰 하우스 오리지날(180개입)","goodSmlclsCode":30206003},{"goodId":740,"goodName":"아이시스(2L)","goodSmlclsCode":30206007},{"goodId":741,"goodName":"스프라이트(1.5L)","goodSmlclsCode":30206006},{"goodId":757,"goodName":"세이 온더바디 고보습 아이리스(900ml)","goodSmlclsCode":30301002},{"goodId":272,"goodName":"크린랩(30cm x 50m)","goodSmlclsCode":30302009},{"goodId":696,"goodName":"스페셜K 오리지널(480g)","goodSmlclsCode":30201010},{"goodId":702,"goodName":"해피바스 허브 라벤더 아로마 바(4개)","goodSmlclsCode":30301006},{"goodId":270,"goodName":"백설 진한참기름","goodSmlclsCode":30204004},{"goodId":282,"goodName":"순창 재래식안심생된장(1kg)","goodSmlclsCode":30204010},{"goodId":283,"goodName":"딸기잼(500g)","goodSmlclsCode":30204015},{"goodId":286,"goodName":"오뚜기 토마토 케찹(500g)","goodSmlclsCode":30204013},{"goodId":291,"goodName":"오뚜 기 사과식초(900ml)","goodSmlclsCode":30204001},{"goodId":292,"goodName":"햇반(210g)","goodSmlclsCode":30201014},{"goodId":319,"goodName":"서울우유 체다슬라이스 치즈(400g)","goodSmlclsCode":30203007},{"goodId":332,"goodName":"해찬들 재래식  된장(1kg)","goodSmlclsCode":30204010},{"goodId":984,"goodName":"오리온 포카칩 오리지널(66g)","goodSmlclsCode":30205003},{"goodId":989,"goodName":"해태 바밤바(63ml)","goodSmlclsCode":30205009},{"goodId":991,"goodName":"농심 새우깡(90g)","goodSmlclsCode":30205004},{"goodId":993,"goodName":"오리온 초코파이(18개입)","goodSmlclsCode":30205005},{"goodId":1045,"goodName":"퍼실 파워젤 액체 일반용(2.7L)","goodSmlclsCode":30302018},{"goodId":1051,"goodName":"홈키파 수성 에어졸(500ml)","goodSmlclsCode":30302016},{"goodId":1052,"goodName":"컴배트 스피드 에어졸(500ml)","goodSmlclsCode":30302016},{"goodId":1053,"goodName":"에프킬라 에어로졸 무향(500ml)","goodSmlclsCode":30302016},{"goodId":1058,"goodName":"오랄비 크로스액션(3개입)","goodSmlclsCode":30301024},{"goodId":1066,"goodName":"해태 부라보콘 화이트바닐라(140ml)","goodSmlclsCode":30205008},{"goodId":1090,"goodName":"피죤 습기제로(8개입)","goodSmlclsCode":30302012},{"goodId":1149,"goodName":"투게더 오리지널 바닐라(900ml)","goodSmlclsCode":30205008},{"goodId":1156,"goodName":"들기름  재래 도시락김(12팩)","goodSmlclsCode":30202005},{"goodId":1180,"goodName":"백설 식용유(1.5L)","goodSmlclsCode":30204005},{"goodId":937,"goodName":"정통크림빵(3 개입)","goodSmlclsCode":30201001},{"goodId":965,"goodName":"국산콩두부 찌개용(380g)","goodSmlclsCode":30201008},{"goodId":966,"goodName":"행복한콩 찌개두부(300g)","goodSmlclsCode":30201008},{"goodId":967,"goodName":"행복한콩 부침두부(300g)","goodSmlclsCode":30201008},{"goodId":975,"goodName":"청정원 카레여왕 비프카레(160g)","goodSmlclsCode":30201004},{"goodId":976,"goodName":"오뚜기밥(3개입)","goodSmlclsCode":30201014},{"goodId":977,"goodName":"햇반(3개입)","goodSmlclsCode":30201014},{"goodId":1044,"goodName":"퍼실 파워젤 액체 드럼용(2.7L)","goodSmlclsCode":30302018},{"goodId":1077,"goodName":"오리온 통아몬드 캔디(90g)","goodSmlclsCode":30205001},{"goodId":1079,"goodName":"참프레 동물복지 닭백숙(1.1kg)","goodSmlclsCode":30101003},{"goodId":1155,"goodName":"양반 들기름이 그윽한 김(16팩)","goodSmlclsCode":30202005},{"goodId":1200,"goodName":"롯데 빅가나 마일드(110g)","goodSmlclsCode":30205006},{"goodId":1205,"goodName":"오뚜기 간편 북엇국(5개입)","goodSmlclsCode":30201002},{"goodId":1206,"goodName":"햇반(6개입)","goodSmlclsCode":30201014},{"goodId":1207,"goodName":"비비고 소고기죽(280g)","goodSmlclsCode":30201020},{"goodId":1208,"goodName":"비비고 전복죽(280g)","goodSmlclsCode":30201020},{"goodId":1212,"goodName":"대림 게맛살 큰잔치(300g)","goodSmlclsCode":30202003},{"goodId":1228,"goodName":"국순당 생막걸리(750ml)","goodSmlclsCode":30206016},{"goodId":1230,"goodName":"테라(500ml)","goodSmlclsCode":30206012},{"goodId":1231,"goodName":"매일두유 담백한 맛(16팩)","goodSmlclsCode":30206011},{"goodId":1237,"goodName":"델몬트 오렌지 100(1.5L)","goodSmlclsCode":30206008},{"goodId":1239,"goodName":"바리스타룰스 콜드브루 블랙(325ml)","goodSmlclsCode":30206002},{"goodId":1248,"goodName":"떠먹는 불가리스 딸기(4개)","goodSmlclsCode":30203008},{"goodId":1249,"goodName":"바이오 플레인 요거트(4개)","goodSmlclsCode":30203008},{"goodId":1250,"goodName":"요플레 오리지널(4개)","goodSmlclsCode":30203008},{"goodId":1251,"goodName":"불가리스(4개)","goodSmlclsCode":30203008},{"goodId":1264,"goodName":"의성마늘 한입슬라이스햄(60g)","goodSmlclsCode":30203004},{"goodId":1266,"goodName":"마미손 고무장갑 중(2세트)","goodSmlclsCode":30302008},{"goodId":968,"goodName":"삼립호떡 미니꿀호떡(16개입)","goodSmlclsCode":30201001},{"goodId":970,"goodName":"보노 포르치니버섯스프(3개입)","goodSmlclsCode":30201019},{"goodId":974,"goodName":"청정원 옛날식 짜장(180g)","goodSmlclsCode":30201004},{"goodId":1003,"goodName":"비비고 사골곰탕(500g)","goodSmlclsCode":30201026},{"goodId":1006,"goodName":"햇반 컵반 고추장 제육덮밥(250g)","goodSmlclsCode":30201025},{"goodId":1008,"goodName":"햇반 컵반 미역국밥(167g)","goodSmlclsCode":30201025},{"goodId":1072,"goodName":"풀무원 동물복지 목초란(대란 10개)","goodSmlclsCode":30101001},{"goodId":1073,"goodName":"목초를 먹고 자란 건강한 닭이 낳은 달걀(대란 15개)","goodSmlclsCode":30101001},{"goodId":1074,"goodName":"CJ 알짜란(대란 15개)","goodSmlclsCode":30101001},{"goodId":1075,"goodName":"CJ 더안심 건강란(대란 15 개)","goodSmlclsCode":30101001},{"goodId":1087,"goodName":"좋은느낌 좋은순면 울 트라 날개 중형(36개입)","goodSmlclsCode":30301013},{"goodId":1088,"goodName":"좋은느낌 울트라슬림 에어핏쿠션 날개 중형(36개입)","goodSmlclsCode":30301013},{"goodId":1271,"goodName":"피죤 섬유유연제 핑크로즈(2.1L)","goodSmlclsCode":30302005},{"goodId":1280,"goodName":"크린롤백(25cm x 35cm)","goodSmlclsCode":30302002},{"goodId":1286,"goodName":"메소드 주방세제 핑크(532ml)","goodSmlclsCode":30302006},{"goodId":1290,"goodName":"유한락스 레귤러(1.8L)","goodSmlclsCode":30302013},{"goodId":1292,"goodName":"유한락스 욕실청소용(1800ml)","goodSmlclsCode":30302013},{"goodId":1303,"goodName":"오가니스트 히말라야 핑크솔트 바디워시 리프레싱 민트 향(865ml)","goodSmlclsCode":30301002},{"goodId":1304,"goodName":"도브 뷰티 너리 싱 바디워시(1kg)","goodSmlclsCode":30301002},{"goodId":1305,"goodName":"도브 센 스티브 스킨 바디워시(1kg)","goodSmlclsCode":30301002},{"goodId":1306,"goodName":"해피바스 라벤더 에센스 바디워시(900g)","goodSmlclsCode":30301002},{"goodId":1308,"goodName":"미쟝센 퍼펙트세럼 샴푸(680ml)","goodSmlclsCode":30301010},{"goodId":1312,"goodName":"랩신 핸드워시 센서티브(250ml)","goodSmlclsCode":30301021},{"goodId":1314,"goodName":"하기스 매직컴포트 대형 공용 팬티형 4단계(40매)","goodSmlclsCode":30301012},{"goodId":1317,"goodName":"메디안 치석 치약 오리지널(3개)","goodSmlclsCode":30301007},{"goodId":1321,"goodName":"아이비(270g)","goodSmlclsCode":30205002},{"goodId":939,"goodName":"갈치(냉동, 100g)","goodSmlclsCode":30103001},{"goodId":940,"goodName":"참조기(200~400g)","goodSmlclsCode":30103002},{"goodId":941,"goodName":"오징어(냉동, 200~300g)","goodSmlclsCode":30103004},{"goodId":987,"goodName":"빙그레 참붕어 싸만코(150ml)","goodSmlclsCode":30205010},{"goodId":988,"goodName":"돼지바(70ml)","goodSmlclsCode":30205009},{"goodId":1001,"goodName":"오뚜기 옛날 사골곰탕(350g)","goodSmlclsCode":30201026},{"goodId":1002,"goodName":"오뚜기 옛날 육개장(300g)","goodSmlclsCode":30201026},{"goodId":1018,"goodName":"켈로그 레드베리 에너지바(4개입)","goodSmlclsCode":30205011},{"goodId":1019,"goodName":"자유시간(36g)","goodSmlclsCode":30205012},{"goodId":1021,"goodName":"핫브레이크 미니(714g)","goodSmlclsCode":30205012},{"goodId":1030,"goodName":"롯데 핫식스(250ml)","goodSmlclsCode":30206021},{"goodId":1146,"goodName":"임 페리얼 드림 XO 3단계(800g)","goodSmlclsCode":30203006},{"goodId":1186,"goodName":"국산콩두부 부침용(380g)","goodSmlclsCode":30201008},{"goodId":1188,"goodName":"백설 찰밀가루(1kg)","goodSmlclsCode":30201007},{"goodId":1189,"goodName":"백설 5가지 재료 부침가루(1kg)","goodSmlclsCode":30201012},{"goodId":1194,"goodName":"롯데 목캔디 허브민트(217g)","goodSmlclsCode":30205001},{"goodId":1196,"goodName":"포테토칩 오리지날(125g)","goodSmlclsCode":30205003},{"goodId":1199,"goodName":"롯데 ABC 초코(187g)","goodSmlclsCode":30205006},{"goodId":1203,"goodName":"오뚜기 간편 미역국(5개입)","goodSmlclsCode":30201002},{"goodId":1215,"goodName":"오 뚜기 컵밥 제육덮밥(310g)","goodSmlclsCode":30201025},{"goodId":1217,"goodName":"삼호 안심 부산어묵(400g)","goodSmlclsCode":30202002},{"goodId":1218,"goodName":"사조참치 살코기 안심따개(4캔)","goodSmlclsCode":30202004},{"goodId":1219,"goodName":"동원참치 라이트스탠다드(4캔)","goodSmlclsCode":30202004},{"goodId":1222,"goodName":"큐원 하얀설탕(1kg)","goodSmlclsCode":30204007},{"goodId":1224,"goodName":"청정원 미원 맛소금(500g)","goodSmlclsCode":30204006},{"goodId":1068,"goodName":"롯데 월드콘 바닐라(160ml)","goodSmlclsCode":30205008},{"goodId":1071,"goodName":"펩시콜라(1.8L)","goodSmlclsCode":30206005},{"goodId":1100,"goodName":"청정원 카레여왕 구운마늘&amp;양파(108g)","goodSmlclsCode":30204014},{"goodId":1225,"goodName":"백설 건강발효 사과식초(800ml)","goodSmlclsCode":30204001},{"goodId":1227,"goodName":"청정원 진한 토마토 케찹(500g)","goodSmlclsCode":30204013},{"goodId":1229,"goodName":"하이트 엑스트라 콜드(500ml)","goodSmlclsCode":30206012},{"goodId":1232,"goodName":"달콤한 베지밀 비(16팩)","goodSmlclsCode":30206011},{"goodId":1235,"goodName":"오로나민C(10개입)","goodSmlclsCode":30206001},{"goodId":1238,"goodName":"미넷메이드 오렌지(1.5L)","goodSmlclsCode":30206008},{"goodId":1241,"goodName":"카누 마일드 로스트 아메리카노(30개입)","goodSmlclsCode":30206003},{"goodId":1242,"goodName":"프렌치카페 카페믹스(220개입)","goodSmlclsCode":30206003},{"goodId":1244,"goodName":"칠성사이다 제로(1.5L)","goodSmlclsCode":30206006},{"goodId":1247,"goodName":"이오(5개)","goodSmlclsCode":30203008},{"goodId":1253,"goodName":"앱솔루트 명작 3단계(800g)","goodSmlclsCode":30203006},{"goodId":1254,"goodName":"백설 그릴 비엔나(720g)","goodSmlclsCode":30203003},{"goodId":1255,"goodName":"그릴후랑크(600g)","goodSmlclsCode":30203003},{"goodId":1256,"goodName":"의성마늘 빅그릴 비엔나(600g)","goodSmlclsCode":30203003},{"goodId":1258,"goodName":"매일우유 오리지널(900ml)","goodSmlclsCode":30203005},{"goodId":1259,"goodName":"주부9단 프랑크소시지(900g)","goodSmlclsCode":30203003},{"goodId":1261,"goodName":"체다치즈(15매)","goodSmlclsCode":30203007},{"goodId":1262,"goodName":"드빈치 고칼슘치즈(15매)","goodSmlclsCode":30203007},{"goodId":1263,"goodName":"스 팸 클래식(200g)","goodSmlclsCode":30203004},{"goodId":1265,"goodName":"주부9단 
슬라이스햄(300g)","goodSmlclsCode":30203004},{"goodId":1274,"goodName":"때가 쏙 비트 분말세제(6kg)","goodSmlclsCode":30302017},{"goodId":1278,"goodName":"비트  트리플 액션(2.8L)","goodSmlclsCode":30302017},{"goodId":1281,"goodName":"3M 후레쉬 슬라이드 지퍼백 중형(21cm x 16cm x 6cm)","goodSmlclsCode":30302002},{"goodId":1282,"goodName":"손잡이 크린백(35cm x 45cm)","goodSmlclsCode":30302002},{"goodId":1283,"goodName":"지퍼락 지퍼백 냉장 중형(20매)","goodSmlclsCode":30302002},{"goodId":1284,"goodName":"자연퐁 솔잎(490ml)","goodSmlclsCode":30302006},{"goodId":998,"goodName":"농심 신라면 큰사발면(114g)","goodSmlclsCode":30201024},{"goodId":999,"goodName":"오뚜기 참깨라면 컵(110g)","goodSmlclsCode":30201024},{"goodId":1000,"goodName":"팔도 왕뚜껑(110g)","goodSmlclsCode":30201024},{"goodId":1004,"goodName":"비비고 육개장(500g)","goodSmlclsCode":30201026},{"goodId":1007,"goodName":"오뚜기 맛있는 쇠고기미역국밥(162g)","goodSmlclsCode":30201025},{"goodId":1016,"goodName":"닥터유 에너지바(40g)","goodSmlclsCode":30205011},{"goodId":1017,"goodName":"닥터유 에너지바(4개입)","goodSmlclsCode":30205011},{"goodId":1020,"goodName":"자유시간(5개입)","goodSmlclsCode":30205012},{"goodId":1031,"goodName":"레드불 에너지 드링크(250ml)","goodSmlclsCode":30206021},{"goodId":1032,"goodName":"몬스터 에너지(355ml)","goodSmlclsCode":30206021},{"goodId":1184,"goodName":"옛날 자른당면(300g)","goodSmlclsCode":30201015},{"goodId":1185,"goodName":"백설 자른 햇당면(300g)","goodSmlclsCode":30201015},{"goodId":1285,"goodName":"프릴  시크릿 오브 베이킹소다 퓨어레몬향(750ml)","goodSmlclsCode":30302006},{"goodId":1287,"goodName":"유한락스 후레쉬(1.5L)","goodSmlclsCode":30302013},{"goodId":1288,"goodName":"무균무때 세정제 욕실용(900ml)","goodSmlclsCode":30302013},{"goodId":1289,"goodName":"홈스타 욕실용 세정제(900ml)","goodSmlclsCode":30302013},{"goodId":1291,"goodName":"홈스타 락스와세제 후로랄파인(750ml)","goodSmlclsCode":30302013},{"goodId":1294,"goodName":"크리넥스 안심 키친타월(6롤)","goodSmlclsCode":30302007},{"goodId":1295,"goodName":"가그린 오리지널(750ml)","goodSmlclsCode":30304009},{"goodId":1296,"goodName":"리스테린 쿨민트(750ml)","goodSmlclsCode":30304009},{"goodId":1299,"goodName":"정말 순한 바디밀크(450ml)","goodSmlclsCode":30301001},{"goodId":1301,"goodName":"플로쉴드 옐로우 면도날(4개)","goodSmlclsCode":30301017},{"goodId":1302,"goodName":"하이드로8 면도날(8개)","goodSmlclsCode":30301017},{"goodId":1309,"goodName":"엘라스틴 모로칸 아르간 오일 집중영양 샴푸(680ml)","goodSmlclsCode":30301010},{"goodId":1316,"goodName":"하기스 매직컴포트 특대형 공용 팬티형 5단계(33매)","goodSmlclsCode":30301012},{"goodId":1318,"goodName":"죽염 칫술 잇몸(4개)","goodSmlclsCode":30301024},{"goodId":1319,"goodName":"페리 오 토탈7 칫솔 힘있는 미세모(4개)","goodSmlclsCode":30301024},{"goodId":1324,"goodName":"동원 싱싱맛살 실속(500g)","goodSmlclsCode":30202003},{"goodId":1326,"goodName":"다우니 고농축 섬유유연제 엑스퍼트(2L)","goodSmlclsCode":30302005},{"goodId":1328,"goodName":"페브리즈 상쾌한향(900ml)","goodSmlclsCode":30302003},{"goodId":1330,"goodName":"려 함빛 극손상엔영양케어 샴푸(550ml)","goodSmlclsCode":30301010},{"goodId":1331,"goodName":"크리넥스 데코엔소프트 3겹(24롤)","goodSmlclsCode":30301004},{"goodId":1332,"goodName":"청정원 오리엔탈 드레싱","goodSmlclsCode":30204019},{"goodId":1333,"goodName":"청정원 발사믹 드레싱","goodSmlclsCode":30204019},{"goodId":1334,"goodName":"마주앙 레드(750ml)","goodSmlclsCode":30206023},{"goodId":1335,"goodName":"진로 와인(500ml)","goodSmlclsCode":30206023},{"goodId":1338,"goodName":"밥이보약 튼튼한관절","goodSmlclsCode":30305001},{"goodId":1339,"goodName":"밥이보약 CAT 걱정없는 헤어볼","goodSmlclsCode":30305001},{"goodId":1080,"goodName":"파스퇴르우유 후레쉬(930ml)","goodSmlclsCode":30203005},{"goodId":1120,"goodName":"돼지고기 목살(100g)","goodSmlclsCode":30101004},{"goodId":1122,"goodName":"부세(200~400g)","goodSmlclsCode":30103002},{"goodId":1181,"goodName":"크린지퍼백(18cm x 20cm)","goodSmlclsCode":30302002},{"goodId":1182,"goodName":"허니버터아몬드(210g)","goodSmlclsCode":30201021},{"goodId":1322,"goodName":"동원 양반 쇠고기죽(287.5g)","goodSmlclsCode":30201020},{"goodId":1323,"goodName":"동원 양반 전복죽(287.5g)","goodSmlclsCode":30201020},{"goodId":1327,"goodName":"페브리즈 상쾌한향(370ml)","goodSmlclsCode":30302003},{"goodId":1329,"goodName":"코디 키친타월(6롤)","goodSmlclsCode":30302007}],"latitude":37.29640641606932,"longitude":126.9776123527779}
******/
