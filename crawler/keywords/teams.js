const teams = [
    //K-League
    {
        "id": "FCSeoul",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "FC Seoul",
            "kr": "FC 서울"
        },
        "alias": {
            "en": "FC Seoul",
            "kr": "FC 서울"
        },
        "img": "teams/FCSeoul.png"
    },
    {
        "id": "JeonbukFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Jeonbuk Hyundai Motors FC",
            "kr": "전북 현대 모터스 FC"
        },
        "alias": {
            "en": "Jeobuk FC",
            "kr": "전북 FC"
        },
        "img": "teams/JeonbukFC.png"
    },
    {
        "id": "JejuUtd",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Jeju United",
            "kr": "제주 유나이티드"
        },
        "alias": {
            "en": "Jeju Utd",
            "kr": "제주"
        },
        "img": "teams/JejuUtd.png"
    },
    {
        "id": "UlsanFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Ulsan Hyundai FC",
            "kr": "울산 현대 축구단"
        },
        "alias": {
            "en": "Ulsan FC",
            "kr": "울산 FC"
        },
        "img": "teams/UlsanFC.png"
    },
    {
        "id": "JeonnamFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Jeonnam Dragons FC",
            "kr": "전남 드래곤즈 FC"
        },
        "alias": {
            "en": "Jeonnam Dragons",
            "kr": "전남 드래곤즈"
        },
        "img": "teams/JeonnamFC.png"
    },
    {
        "id": "SangjuFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Sangju Sangmu FC",
            "kr": "상주 상무 프로축구단"
        },
        "alias": {
            "en": "Sangju FC",
            "kr": "상주 상무"
        },
        "img": "teams/SangjuFC.png"
    },
    {
        "id": "SuwonBluewings",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Suwon Samsung Bluewings",
            "kr": "수원 삼성 블루윙즈"
        },
        "alias": {
            "en": "Suwon Bluewings",
            "kr": "수원 블루윙즈"
        },
        "img": "teams/SuwonBluewings.png"
    },
    {
        "id": "GwangjuFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Gwangju FC",
            "kr": "광주 FC"
        },
        "alias": {
            "en": "Gwangju FC",
            "kr": "광주 FC"
        },
        "img": "teams/GwangjuFC.png"
    },
    {
        "id": "PohangSteelers",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Pohang Steelers",
            "kr": "포항 스틸러스"
        },
        "alias": {
            "en": "Pohang Steelers",
            "kr": "포항 스틸러스"
        },
        "img": "teams/PohangSteelers.png"
    },
    {
        "id": "IncheonUtd",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Incheon United",
            "kr": "인천 유나이티드"
        },
        "alias": {
            "en": "Incheon Utd",
            "kr": "인천 유나이티드"
        },
        "img": "teams/IncheonUtd.png"
    },
    {
        "id": "DaeguFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Daegu FC",
            "kr": "대구 FC"
        },
        "alias": {
            "en": "Daegu FC",
            "kr": "대구 FC"
        },
        "img": "teams/DaeguFC.png"
    },
    {
        "id": "GangwonFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Gangwon FC",
            "kr": "강원 FC"
        },
        "alias": {
            "en": "Gangwon FC",
            "kr": "강원 FC"
        },
        "img": "teams/GangwonFC.png"
    },
    {
        "id": "SeongnamFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Seongnam FC",
            "kr": "성남 FC"
        },
        "alias": {
            "en": "Seongnam FC",
            "kr": "성남 FC"
        },
        "img": "teams/SeongnamFC.png"
    },
    {
        "id": "SuwonFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Suwon FC",
            "kr": "수원 FC"
        },
        "alias": {
            "en": "Suwon FC",
            "kr": "수원 FC"
        },
        "img": "teams/SuwonFC.png"
    },
    {
        "id": "BuchoenFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Bucheon FC 1995",
            "kr": "부천 FC 1995"
        },
        "alias": {
            "en": "Bucheon FC",
            "kr": "부천 FC"
        },
        "img": "teams/BuchoenFC.png"
    },
    {
        "id": "BusanIPark",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Busan I-Park FC",
            "kr": "부산 아이파크 FC"
        },
        "alias": {
            "en": "Busan I-Park",
            "kr": "부산 아이파크"
        },
        "img": "teams/BusanIPark.png"
    },
    {
        "id": "SeoulEland",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Seoul E-Land FC",
            "kr": "서울 이랜드 FC"
        },
        "alias": {
            "en": "Seoul E-Land",
            "kr": "서울 이랜드"
        },
        "img": "teams/SeoulEland.png"
    },
    {
        "id": "DaejeonCitizen",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Daejeon Citizen FC",
            "kr": "대전 시티즌 FC"
        },
        "alias": {
            "en": "Daejeon Citizen",
            "kr": "대전 시티즌"
        },
        "img": "teams/DaejeonCitizen.png"
    },
    {
        "id": "GyeongnamFC",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Gyeongnam FC",
            "kr": "경남 FC"
        },
        "alias": {
            "en": "Gyeongnam FC",
            "kr": "경남 FC"
        },
        "img": "teams/GyeongnamFC.png"
    },
    {
        "id": "FCAnyang",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "FC Anyang",
            "kr": "FC 안양"
        },
        "alias": {
            "en": "FC Anyang",
            "kr": "FC 안양"
        },
        "img": "teams/FCAnyang.png"
    },
    {
        "id": "AnsanGreeners",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Ansan Greeners FC",
            "kr": "안산 그리너스 FC"
        },
        "alias": {
            "en": "Ansan Greeners",
            "kr": "안산 그리너스"
        },
        "img": "teams/AnsanGreeners.png"
    },
    {
        "id": "AsanMugunghwa",
        "type": "team",
        "league": "KLeague",
        "name": {
            "en": "Asan Mugunghwa FC",
            "kr": "아산 무궁화 FC"
        },
        "alias": {
            "en": "Asan Mugunghwa",
            "kr": "아산 무궁화"
        },
        "img": "teams/AsanMugunghwa.png"
    },

    // Premier League
    {
        "id": "Arsenal",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Arsenal FC",
            "kr": "아스널 FC"
        },
        "alias": {
            "en": "Arsenal",
            "kr": "아스널"
        },
        "img": "teams/Arsenal.png"
    },
    {
        "id": "AFCBournemouth",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "AFC Bournemouth",
            "kr": "AFC 본머스"
        },
        "alias": {
            "en": "Bournemouth",
            "kr": "본머스"
        },
        "img": "teams/AFCBournemouth.png"
    },
    {
        "id": "Burnley",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Burnley FC",
            "kr": "번리 FC"
        },
        "alias": {
            "en": "Burnley",
            "kr": "번리"
        },
        "img": "teams/Burnley.png"
    },
    {
        "id": "Chelsea",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Chelsea FC",
            "kr": "첼시 FC"
        },
        "alias": {
            "en": "Chelsea",
            "kr": "첼시"
        },
        "img": "teams/Chelsea.png"
    },
    {
        "id": "CrystalPalace",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Crystal Palace FC",
            "kr": "크리스탈 팰리스 FC"
        },
        "alias": {
            "en": "Crystal Palace",
            "kr": "크리스탈 팰리스"
        },
        "img": "teams/CrystalPalace.png"
    },
    {
        "id": "Everton",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Everton FC",
            "kr": "에버턴 FC"
        },
        "alias": {
            "en": "Everton",
            "kr": "에버턴"
        },
        "img": "teams/Everton.png"
    },
    {
        "id": "HullCity",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Hull City FC",
            "kr": "헐 시티 FC"
        },
        "alias": {
            "en": "Hull City",
            "kr": "헐 시티"
        },
        "img": "teams/HullCity.png"
    },
    {
        "id": "LeicesterCity",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Leicester City FC",
            "kr": "레스터 시티 FC"
        },
        "alias": {
            "en": "Leicester City",
            "kr": "레스터 시티"
        },
        "img": "teams/LeicesterCity.png"
    },
    {
        "id": "Liverpool",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Liverpool FC",
            "kr": "리버풀 FC"
        },
        "alias": {
            "en": "Liverpool",
            "kr": "리버풀"
        },
        "img": "teams/Liverpool.png"
    },
    {
        "id": "ManCity",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Manchester City FC",
            "kr": "맨체스터 시티 FC"
        },
        "alias": {
            "en": "Man City",
            "kr": "맨시티"
        },
        "img": "teams/ManCity.png"
    },
    {
        "id": "ManUtd",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Manchester United FC",
            "kr": "맨체스터 유나이티드 FC"
        },
        "alias": {
            "en": "Man Utd",
            "kr": "맨유"
        },
        "img": "teams/ManUtd.png"
    },
    {
        "id": "Middlesbrough",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Middlesbrough FC",
            "kr": "미들스브러 FC"
        },
        "alias": {
            "en": "Middlesbrough",
            "kr": "미들스브러"
        },
        "img": "teams/Middlesbrough.png"
    },
    {
        "id": "Southampton",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Southampton FC",
            "kr": "사우샘프턴 FC"
        },
        "alias": {
            "en": "Southampton",
            "kr": "사우샘프턴"
        },
        "img": "teams/Southampton.png"
    },
    {
        "id": "StokeCity",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Stoke City FC",
            "kr": "스토크 시티 FC"
        },
        "alias": {
            "en": "Stoke City",
            "kr": "스토크 시티"
        },
        "img": "teams/StokeCity.png"
    },
    {
        "id": "Sunderland",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Sunderland FC",
            "kr": "선덜랜드 FC"
        },
        "alias": {
            "en": "Sunderland",
            "kr": "선덜랜드"
        },
        "img": "teams/Sunderland.png"
    },
    {
        "id": "SwanseaCity",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Swansea City FC",
            "kr": "스완지 시티 FC"
        },
        "alias": {
            "en": "Swansea City",
            "kr": "스완지 시티"
        },
        "img": "teams/SwanseaCity.png"
    },
    {
        "id": "Tottenham",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Tottenham Hotspur FC",
            "kr": "토트넘 홋스퍼 FC"
        },
        "alias": {
            "en": "Toteenham",
            "kr": "토트넘"
        },
        "img": "teams/Tottenham.png"
    },
    {
        "id": "Watford",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "Watford FC",
            "kr": "왓퍼드 FC"
        },
        "alias": {
            "en": "Watford",
            "kr": "왓퍼드"
        },
        "img": "teams/Watford.png"
    },
    {
        "id": "WestBrom",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "West Bromwich Albion FC",
            "kr": "웨스트 브로미치 앨비언 FC"
        },
        "alias": {
            "en": "West Brom",
            "kr": "웨스트 브로미치"
        },
        "img": "teams/WestBrom.png"
    },
    {
        "id": "WestHam",
        "type": "team",
        "league": "EPL",
        "name": {
            "en": "West Ham United FC",
            "kr": "웨스트햄 유나이티드"
        },
        "alias": {
            "en": "West Ham",
            "kr": "웨스트햄"
        },
        "img": "teams/WestHam.png"
    },

    // La Liga
    {
        "id": "Alaves",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Deportivo Alaves",
            "kr": "데포르티보 알라베스"
        },
        "alias": {
            "en": "Alaves",
            "kr": "알라베스"
        },
        "img": "teams/Alaves.png"
    },
    {
        "id": "Athletic",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Athletic Club",
            "kr": "아틀레틱 클루브"
        },
        "alias": {
            "en": "Athletic",
            "kr": "아틀레틱"
        },
        "img": "teams/Athletic.png"
    },
    {
        "id": "Atletico",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Atletico Madrid",
            "kr": "아틀레티코 마드리드"
        },
        "alias": {
            "en": "Atletico",
            "kr": "아틀레티코"
        },
        "img": "teams/Atletico.png"
    },
    {
        "id": "Celta",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Celta Vigo",
            "kr": "셀타 비고"
        },
        "alias": {
            "en": "Celta",
            "kr": "셀타"
        },
        "img": "teams/Celta.png"
    },
    {
        "id": "Deportivo",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Real Club Deportivo",
            "kr": "데포르티보 라코루냐"
        },
        "alias": {
            "en": "Deportivo",
            "kr": "데포르티보"
        },
        "img": "teams/Deportivo.png"
    },
    {
        "id": "Eibar",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Sociedad Deportiva Eibar",
            "kr": "SD 에이바르"
        },
        "alias": {
            "en": "Eibar",
            "kr": "에이바르"
        },
        "img": "teams/Eibar.png"
    },
    {
        "id": "Espanyol",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Reial Club Deportiu Espanyol",
            "kr": "RCD 에스파뇰"
        },
        "alias": {
            "en": "Espanyol",
            "kr": "에스파뇰"
        },
        "img": "teams/Espanyol.png"
    },
    {
        "id": "Barcelona",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "FC Barcelona",
            "kr": "FC 바르셀로나"
        },
        "alias": {
            "en": "Barcelona",
            "kr": "바르셀로나"
        },
        "img": "teams/Barcelona.png"
    },
    {
        "id": "Granada",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Granada CF",
            "kr": "그라나다 CF"
        },
        "alias": {
            "en": "Granada",
            "kr": "그라나다"
        },
        "img": "teams/Granada.png"
    },
    {
        "id": "LasPalmas",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "UD Las Palmas",
            "kr": "UD 라스팔마스"
        },
        "alias": {
            "en": "Las Palmas",
            "kr": "라스팔마스"
        },
        "img": "teams/LasPalmas.png"
    },
    {
        "id": "Leganes",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "CD Leganes",
            "kr": "CD 레가네스"
        },
        "alias": {
            "en": "Leganes",
            "kr": "레가네스"
        },
        "img": "teams/Leganes.png"
    },
    {
        "id": "Malaga",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Malaga CF",
            "kr": "말라가 CF"
        },
        "alias": {
            "en": "Malaga",
            "kr": "말라가"
        },
        "img": "teams/Malaga.png"
    },
    {
        "id": "Osasuna",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "CA Osasuna",
            "kr": "CA 오사스나"
        },
        "alias": {
            "en": "Osasuna",
            "kr": "오사스나"
        },
        "img": "teams/Osasuna.png"
    },
    {
        "id": "Betis",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Real Betis",
            "kr": "레알 베티스"
        },
        "alias": {
            "en": "R. Betis",
            "kr": "베티스"
        },
        "img": "teams/Betis.png"
    },
    {
        "id": "Madrid",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Real Madrid",
            "kr": "레알 마드리드"
        },
        "alias": {
            "en": "R. Madrid",
            "kr": "마드리드"
        },
        "img": "teams/Madrid.png"
    },
    {
        "id": "Sociedad",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Real Sociedad",
            "kr": "레알 소시에다드"
        },
        "alias": {
            "en": "Sociedad",
            "kr": "소시에다드"
        },
        "img": "teams/Sociedad.png"
    },
    {
        "id": "SevillaFC",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Sevilla FC",
            "kr": "세비야 FC"
        },
        "alias": {
            "en": "Sevilla",
            "kr": "세비야"
        },
        "img": "teams/SevillaFC.png"
    },
    {
        "id": "Sporting",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Real Sporting de Gijon",
            "kr": "스포르팅 히혼"
        },
        "alias": {
            "en": "Sporting Gijon",
            "kr": "스포르팅"
        },
        "img": "teams/Sporting.png"
    },
    {
        "id": "Valencia",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Valencia CF",
            "kr": "발렌시아 CF"
        },
        "alias": {
            "en": "Valencia",
            "kr": "발렌시아"
        },
        "img": "teams/Valencia.png"
    },
    {
        "id": "Villarreal",
        "type": "team",
        "league": "Liga",
        "name": {
            "en": "Villarreal CF",
            "kr": "비야레알 CF"
        },
        "alias": {
            "en": "Villarreal",
            "kr": "비야레알"
        },
        "img": "teams/Villarreal.png"
    },

    // Serie A
    {
        "id": "Atalanta",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Atalanta BC",
            "kr": "아탈란타 BC"
        },
        "alias": {
            "en": "Atalanta",
            "kr": "아탈란타"
        },
        "img": "teams/Atalanta.png"
    },
    {
        "id": "Bologna",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Bologna FC",
            "kr": "볼로냐 FC"
        },
        "alias": {
            "en": "Bologna",
            "kr": "볼로냐"
        },
        "img": "teams/Bologna.png"
    },
    {
        "id": "Cagliari",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Cagliari Calcio",
            "kr": "칼리아리 칼치오"
        },
        "alias": {
            "en": "Cagliari",
            "kr": "칼리아리"
        },
        "img": "teams/Cagliari.png"
    },
    {
        "id": "Chievo",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "AC ChievoVerona",
            "kr": "AC 키에보베로나"
        },
        "alias": {
            "en": "Chievo",
            "kr": "키에보"
        },
        "img": "teams/Chievo.png"
    },
    {
        "id": "Crotone",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "FC Crotone",
            "kr": "FC 크로토네"
        },
        "alias": {
            "en": "Crotone",
            "kr": "크로토네"
        },
        "img": "teams/Crotone.png"
    },
    {
        "id": "Empoli",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Empoli FC",
            "kr": "엠폴리 FC"
        },
        "alias": {
            "en": "Empoli",
            "kr": "엠폴리"
        },
        "img": "teams/Empoli.png"
    },
    {
        "id": "Fiorentina",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "ACF Fiorentina",
            "kr": "ACF 피오렌티나"
        },
        "alias": {
            "en": "Fiorentina",
            "kr": "피오렌티나"
        },
        "img": "teams/Fiorentina.png"
    },
    {
        "id": "Genoa",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Genoa CFC",
            "kr": "제노아 CFC"
        },
        "alias": {
            "en": "Genoa",
            "kr": "제노아"
        },
        "img": "teams/Genoa.png"
    },
    {
        "id": "Inter",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "FC Internazionale Milano",
            "kr": "FC 인테르나치오날레 밀라노"
        },
        "alias": {
            "en": "FC Inter",
            "kr": "인테르나치오날레"
        },
        "img": "teams/Inter.png"
    },
    {
        "id": "Juventus",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Juventus FC",
            "kr": "유벤투스 FC"
        },
        "alias": {
            "en": "Juventus",
            "kr": "유벤투스"
        },
        "img": "teams/Juventus.png"
    },
    {
        "id": "Lazio",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "SS Lazio",
            "kr": "SS 라치오"
        },
        "alias": {
            "en": "Lazio",
            "kr": "라치오"
        },
        "img": "teams/Lazio.png"
    },
    {
        "id": "Milan",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "AC Milan",
            "kr": "AC 밀란"
        },
        "alias": {
            "en": "Milan",
            "kr": "밀란"
        },
        "img": "teams/Milan.png"
    },
    {
        "id": "Napoli",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "SSC Napoli",
            "kr": "SSC 나폴리"
        },
        "alias": {
            "en": "Napoli",
            "kr": "나폴리"
        },
        "img": "teams/Napoli.png"
    },
    {
        "id": "Palermo",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "US citta di Palermo",
            "kr": "US 치타 디 팔레르모"
        },
        "alias": {
            "en": "Palermo",
            "kr": "팔레르모"
        },
        "img": "teams/Palermo.png"
    },
    {
        "id": "Pescara",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Delfino Pescara 1936",
            "kr": "델피노 페스카라 1936"
        },
        "alias": {
            "en": "Pescara",
            "kr": "페스카라"
        },
        "img": "teams/Pescara.png"
    },
    {
        "id": "Roma",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "AS Roma",
            "kr": "AS 로마"
        },
        "alias": {
            "en": "Roma",
            "kr": "로마"
        },
        "img": "teams/Roma.png"
    },
    {
        "id": "Sampdoria",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "UC Sampdoria",
            "kr": "UC 삼프도리아"
        },
        "alias": {
            "en": "Sampdoria",
            "kr": "삼프도리아"
        },
        "img": "teams/Sampdoria.png"
    },
    {
        "id": "Sasuuolo",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "US Sassuolo Calcio",
            "kr": "US 사우올로 칼치오"
        },
        "alias": {
            "en": "Sassuolo Calcio",
            "kr": "사수올로"
        },
        "img": "teams/Sasuuolo.png"
    },
    {
        "id": "Torino",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Torino FC",
            "kr": "토리노 FC"
        },
        "alias": {
            "en": "Torino",
            "kr": "토리노"
        },
        "img": "teams/Torino.png"
    },
    {
        "id": "Udinese",
        "type": "team",
        "league": "SerieA",
        "name": {
            "en": "Udinese Calcio",
            "kr": "우디네세 칼치오"
        },
        "alias": {
            "en": "Udinese",
            "kr": "우디네세"
        },
        "img": "teams/Udinese.png"
    },

    // Bundesliga
    {
        "id": "Leverkuzen",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "TSV Bayer 04 Leverkuzen",
            "kr": "TSV 바이어 04 레버쿠젠"
        },
        "alias": {
            "en": "Leverkuzen",
            "kr": "레버쿠젠"
        },
        "img": "teams/Leverkuzen.png"
    },
    {
        "id": "Dortmund",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "BV Borussia Dortmund",
            "kr": "BV 보루시아 도르트문트"
        },
        "alias": {
            "en": "Dortmund",
            "kr": "도르트문트"
        },
        "img": "teams/Dortmund.png"
    },
    {
        "id": "Monchengladbach",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "VfL Borussia Monchengladbach",
            "kr": "VfL 보루시아 뮌헨글라트바흐"
        },
        "alias": {
            "en": "Monchengladbach",
            "kr": "뮌헨글라트바흐"
        },
        "img": "teams/Monchengladbach.png"
    },
    {
        "id": "Frankfurt",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "Eintracht Frankfurt",
            "kr": "아인트라흐트 프랑크푸르트"
        },
        "alias": {
            "en": "Frankfurt",
            "kr": "프랑크푸르트"
        },
        "img": "teams/Frankfurt.png"
    },
    {
        "id": "Augsburg",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "FC Augsburg",
            "kr": "FC 아우크스부르크"
        },
        "alias": {
            "en": "Augsburg",
            "kr": "아우크스부르크"
        },
        "img": "teams/Augsburg.png"
    },
    {
        "id": "Bayern",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "FC Bayern Munchen",
            "kr": "FC 바이에른 뮌헨"
        },
        "alias": {
            "en": "Bayern Munchen",
            "kr": "바이에른 뮌헨"
        },
        "img": "teams/Bayern.png"
    },
    {
        "id": "Ingolstadt",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "FC Ingolstadt 04",
            "kr": "FC 잉골슈타트 04"
        },
        "alias": {
            "en": "Ingolstadt",
            "kr": "잉골슈타트"
        },
        "img": "teams/Ingolstadt.png"
    },
    {
        "id": "Schalke",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "FC Schalke 04",
            "kr": "FC 샬케 04"
        },
        "alias": {
            "en": "Schalke",
            "kr": "샬케"
        },
        "img": "teams/Schalke.png"
    },
    {
        "id": "Hamburger",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "Hamburger SV",
            "kr": "함부르크 SV"
        },
        "alias": {
            "en": "Hamburger",
            "kr": "함부르크"
        },
        "img": "teams/Hamburger.png"
    },
    {
        "id": "Hertha",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "Hertha BSC",
            "kr": "헤르타 BSC"
        },
        "alias": {
            "en": "Hertha",
            "kr": "헤르타"
        },
        "img": "teams/Hertha.png"
    },
    {
        "id": "Leipzig",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "RB Leipzig",
            "kr": "RB 라이프치히"
        },
        "alias": {
            "en": "Leipzig",
            "kr": "라이프치히"
        },
        "img": "teams/Leipzig.png"
    },
    {
        "id": "Freiburg",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "SC Freiburg",
            "kr": "SC 프라이부르크"
        },
        "alias": {
            "en": "Freiburg",
            "kr": "프라이부르크"
        },
        "img": "teams/Freiburg.png"
    },
    {
        "id": "Darmstadt",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "SV Darmstadt 98",
            "kr": "SV 다름슈타트 98"
        },
        "alias": {
            "en": "Darmstadt 98",
            "kr": "다름슈타트 98"
        },
        "img": "teams/Darmstadt.png"
    },
    {
        "id": "Bremen",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "SV Werder Bremen",
            "kr": "SV 베르더 브레멘"
        },
        "alias": {
            "en": "Bremen",
            "kr": "브레멘"
        },
        "img": "teams/Bremen.png"
    },
    {
        "id": "Hoffenheim",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "TSG 1899 Hoffenheim",
            "kr": "TSG 1899 호펜하임"
        },
        "alias": {
            "en": "Hoffenheim",
            "kr": "호펜하임"
        },
        "img": "teams/Hoffenheim.png"
    },
    {
        "id": "Wolfsburg",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "VfL Wolfsburg",
            "kr": "VfL 볼프스부르크"
        },
        "alias": {
            "en": "Wolfsburg",
            "kr": "볼프스부르크"
        },
        "img": "teams/Wolfsburg.png"
    },
    {
        "id": "Koln",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "1.FC Koln",
            "kr": "1.FC 쾰른"
        },
        "alias": {
            "en": "Koln",
            "kr": "쾰른"
        },
        "img": "teams/Koln.png"
    },
    {
        "id": "Mainz",
        "type": "team",
        "league": "Bundesliga",
        "name": {
            "en": "1.FSV Mainz 05",
            "kr": "1.FSV 마인츠 05"
        },
        "alias": {
            "en": "Mainz",
            "kr": "마인츠"
        },
        "img": "teams/Mainz.png"
    },

    // Ligue1
    {
        "id": "Monaco",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "AS Monaco",
            "kr": "AS 모나코"
        },
        "alias": {
            "en": "AS Monaco",
            "kr": "AS 모나코"
        },
        "img": "teams/Monaco.png"
    },
    {
        "id": "PSG",
        "type": "team",
        "league": "",
        "name": {
            "en": "Paris Saint-Germain",
            "kr": "파리 생제르맹"
        },
        "alias": {
            "en": "PSG",
            "kr": "파리 생제르맹"
        },
        "img": "teams/PSG.png"
    },
    {
        "id": "OGC_Nice",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "OGC Nice",
            "kr": "OGC 니스"
        },
        "alias": {
            "en": "OGC Nice",
            "kr": "OGC 니스"
        },
        "img": "teams/OGC_Nice.png"
    },
    {
        "id": "Lyon",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Olympique Lyonnais",
            "kr": "올랭피크 리옹"
        },
        "alias": {
            "en": "Olympique Lyonnais",
            "kr": "올림피크 리옹"
        },
        "img": "teams/Lyon.png"
    },
    {
        "id": "Marseille",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Olympique de Marseille",
            "kr": "올랭피크 드 마르세유"
        },
        "alias": {
            "en": "Olympique Marseille",
            "kr": "마르세유"
        },
        "img": "teams/Marseille.png"
    },
    {
        "id": "Bordeaux",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Girondins de Bordeaux",
            "kr": "지롱댕 드 보르도"
        },
        "alias": {
            "en": "Bordeaux",
            "kr": "보르도"
        },
        "img": "teams/Bordeaux.png"
    },
    {
        "id": "Nantes",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "FC Nantes",
            "kr": "FC 낭트"
        },
        "alias": {
            "en": "Nantes",
            "kr": "낭트"
        },
        "img": "teams/Nantes.png"
    },
    {
        "id": "SaintEtienne",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "AS Saint-Etienne",
            "kr": "AS 생테티엔"
        },
        "alias": {
            "en": "Saint Etienne",
            "kr": "생태티엔"
        },
        "img": "teams/SaintEtienne.png"
    },
    {
        "id": "Rennais",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Stade Rennais FC",
            "kr": "스타드 렌 FC"
        },
        "alias": {
            "en": "Stade Rennais",
            "kr": "스타드 렌"
        },
        "img": "teams/Rennais.png"
    },
    {
        "id": "Guingamp",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "EA Guingamp",
            "kr": "아나방 갱강"
        },
        "alias": {
            "en": "Guingamp",
            "kr": "갱강"
        },
        "img": "teams/Guingamp.png"
    },
    {
        "id": "LOSC",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "LOSC Lille",
            "kr": "LOSC 릴"
        },
        "alias": {
            "en": "LOSC",
            "kr": "LOSC"
        },
        "img": "teams/LOSC.png"
    },
    {
        "id": "Angers",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Angers SCO",
            "kr": "앙제 SCO"
        },
        "alias": {
            "en": "Angers",
            "kr": "앙제"
        },
        "img": "teams/Angers.png"
    },
    {
        "id": "Toulouse",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Toulouse FC",
            "kr": "툴루즈 FC"
        },
        "alias": {
            "en": "Toulouse",
            "kr": "툴루즈"
        },
        "img": "teams/Toulouse.png"
    },
    {
        "id": "Metz",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "FC Metz",
            "kr": "FC 메스"
        },
        "alias": {
            "en": "Metz",
            "kr": "FC 메스"
        },
        "img": "teams/Metz.png"
    },
    {
        "id": "Montpellier",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Montpellier Herault SC",
            "kr": "몽펠리에 에롤 SC"
        },
        "alias": {
            "en": "Montpellier",
            "kr": "몽펠리에"
        },
        "img": "teams/Montpellier.png"
    },
    {
        "id": "Dijon",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "Dijon FCO",
            "kr": "디종 FCO"
        },
        "alias": {
            "en": "Dijon",
            "kr": "디종"
        },
        "img": "teams/Dijon.png"
    },
    {
        "id": "Caen",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "SM Caen",
            "kr": "SM 캉"
        },
        "alias": {
            "en": "Caen",
            "kr": "SM 캉"
        },
        "img": "teams/Caen.png"
    },
    {
        "id": "Lorient",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "FC Lorient",
            "kr": "FC 로리앙"
        },
        "alias": {
            "en": "Lorient",
            "kr": "로리앙"
        },
        "img": "teams/Lorient.png"
    },
    {
        "id": "Nancy",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "AS Nancy Lorraine",
            "kr": "AS 낭시"
        },
        "alias": {
            "en": "Nancy Lorraine",
            "kr": "낭시"
        },
        "img": "teams/Nancy.png"
    },
    {
        "id": "Bastia",
        "type": "team",
        "league": "Ligue1",
        "name": {
            "en": "SC Bastia",
            "kr": "SC 바스티아"
        },
        "alias": {
            "en": "Bastia",
            "kr": "바스티아"
        },
        "img": "teams/Bastia.png"
    },

    // MLS
    // Wetstern Conference
    {
        "id": "ColoradoRapids"
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Colorado Rapids",
            "kr": "콜로라도 래피즈"
        },
        "alias": {
            "en": "Colorado Rapids",
            "kr": "콜로라도 래피즈"
        },
        "img": "teams/ColoradoRapids.png"
    },
    {
        "id": "FCDallas",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "FC Dallas",
            "kr": "FC 댈러스"
        },
        "alias": {
            "en": "FC Dallas",
            "kr": "FC 댈러스"
        },
        "img": "teams/FCDallas.png"
    },
    {
        "id": "HoustonDynamo",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Houston Dynamo",
            "kr": "휴스턴 다이나모"
        },
        "alias": {
            "en": "Houston Dynamo",
            "kr": "휴스턴 다이나모"
        },
        "img": "teams/HoustonDynamo.png"
    },
    {
        "id": "LAGalaxy",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "LA Galaxy",
            "kr": "LA 갤럭시"
        },
        "alias": {
            "en": "LA Galaxy",
            "kr": "LA 갤럭시"
        },
        "img": "teams/LAGalaxy.png"
    },
    {
        "id": "MinnesotaUtd",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Minnesota United FC",
            "kr": "미네소타 유나이티드 FC"
        },
        "alias": {
            "en": "Minnesota Utd",
            "kr": "미네소타 FC"
        },
        "img": "teams/MinnesotaUtd.png"
    },
    {
        "id": "PortlandTimbers",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Portland Timbers",
            "kr": "포틀랜드 팀버스"
        },
        "alias": {
            "en": "Portland Timbers",
            "kr": "포틀랜드 팀버스"
        },
        "img": "teams/PortlandTimbers.png"
    },
    {
        "id": "RSL",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Real Salt Lake",
            "kr": "레알 솔트레이크"
        },
        "alias": {
            "en": "RSL",
            "kr": "레알 솔트레이크"
        },
        "img": "teams/RSL.png"
    },
    {
        "id": "SanJose",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "San Jose Earthquakes",
            "kr": "산호세 어스퀘이크스"
        },
        "alias": {
            "en": "San Jose Earthquakes",
            "kr": "산호세 어스퀘이크스"
        },
        "img": "teams/SanJose.png"
    },
    {
        "id": "SeattleSounders",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Seattle Sounders FC",
            "kr": "시애틀 사운더스 FC"
        },
        "alias": {
            "en": "Sounders",
            "kr": "시애틀 사운더스"
        },
        "img": "teams/SeattleSounders.png"
    },
    {
        "id": "SportingKansas",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Sporting Kansas City",
            "kr": "스포팅 캔자스시티"
        },
        "alias": {
            "en": "Sporting Kansas City",
            "kr": "스포팅 캔자스시티"
        },
        "img": "teams/SportingKansas.png"
    },
    {
        "id": "Whitecaps",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Vancouver Whitecaps FC",
            "kr": "밴쿠버 화이트캡스 FC"
        },
        "alias": {
            "en": "Whitecaps",
            "kr": "화이트캡스"
        },
        "img": "teams/Whitecaps.png"
    },
    // Eastern Conference
    {
        "id": "AtlantaUtd",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Atlanta United FC",
            "kr": "애틀랜타 유나이티드 FC"
        },
        "alias": {
            "en": "Atlanta Utd",
            "kr": "애틀랜타 유나이티드"
        },
        "img": "teams/AtlantaUtd.png"
    },
    {
        "id": "ChicagoFire",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Chicago Fire",
            "kr": "시카고 파이어"
        },
        "alias": {
            "en": "Chicago Fire",
            "kr": "시카고 파이어"
        },
        "img": "teams/ChicagoFire.png"
    },
    {
        "id": "ColumbusCrew",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Columbus Crew SC",
            "kr": "콜럼버스 크루 SC"
        },
        "alias": {
            "en": "Columbus Crew",
            "kr": "콜럼버스 크루"
        },
        "img": "teams/ColumbusCrew.png"
    },
    {
        "id": "DCUtd",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "DC United",
            "kr": "DC 유나이티드"
        },
        "alias": {
            "en": "DC Utd",
            "kr": "DC 유나이티드"
        },
        "img": "teams/DCUtd.png"
    },
    {
        "id": "MontrealImpact",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Montreal Impact",
            "kr": "몬트리올 임팩트"
        },
        "alias": {
            "en": "Montreal Impact",
            "kr": "몬트리올 임팩트"
        },
        "img": "teams/MontrealImpact.png"
    },
    {
        "id": "NewEngland",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "New England Revolution",
            "kr": "뉴잉글랜드 레볼루션"
        },
        "alias": {
            "en": "New England Revolution",
            "kr": "뉴잉글랜드 레볼루션"
        },
        "img": "teams/NewEngland.png"
    },
    {
        "id": "NewYorkFC",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "New York City FC",
            "kr": "뉴욕 시티 FC"
        },
        "alias": {
            "en": "New York City FC",
            "kr": "뉴욕 시티 FC"
        },
        "img": "teams/NewYorkFC.png"
    },
    {
        "id": "NewYorkRedBulls",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "New York Red Bulls",
            "kr": "뉴욕 레드불스"
        },
        "alias": {
            "en": "New York Red Bulls",
            "kr": "뉴욕 레드불스"
        },
        "img": "teams/NewYorkRedBulls.png"
    },
    {
        "id": "OrlandoSC",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Orlando City SC",
            "kr": "올랜도 시티 SC"
        },
        "alias": {
            "en": "Orlando SC",
            "kr": "올랜도 SC"
        },
        "img": "teams/OrlandoSC.png"
    },
    {
        "id": "PhiladelphiaUnion",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Philadelphia Union",
            "kr": "필라델피아 유니언"
        },
        "alias": {
            "en": "Philadelphia Union",
            "kr": "필라델피아 유니언"
        },
        "img": "teams/PhiladelphiaUnion.png"
    },
    {
        "id": "TorontoFC",
        "type": "team",
        "league": "MLS",
        "name": {
            "en": "Toronto FC",
            "kr": "토론토 FC"
        },
        "alias": {
            "en": "Toronto FC",
            "kr": "토론토 FC"
        },
        "img": "teams/TorontoFC.png"
    },
        // -------------------FOOTBALL-------------------
    // NFL

    // -------------------BASEBALL-------------------
    // KBO
    {
        "id": "Doosan",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "Doosan Bears",
            "kr": "두산 베어즈"
        },
        "alias": {
            "en": "Doosan",
            "kr": "두산"
        },
        "img": "teams/Doosan.png"
    },
    {
        "id": "NC",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "NC Dainos",
            "kr": "NC 다이노스"
        },
        "alias": {
            "en": "NC",
            "kr": "NC"
        },
        "img": "teams/NC.png"
    },
    {
        "id": "Nexen",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "Nexen Heores",
            "kr": "넥센 히어로즈"
        },
        "alias": {
            "en": "Nexen",
            "kr": "넥센"
        },
        "img": "teams/Nexen.png"
    },
    {
        "id": "LG",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "LG Twins",
            "kr": "LG 트윈스"
        },
        "alias": {
            "en": "LG",
            "kr": "LG"
        },
        "img": "teams/LG.png"
    },
    {
        "id": "KIA",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "KIA Tigers",
            "kr": "기아 타이거즈"
        },
        "alias": {
            "en": "KIA",
            "kr": "기아"
        },
        "img": "teams/KIA.png"
    },
    {
        "id": "SK",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "SK Wyverns",
            "kr": "SK 와이번즈"
        },
        "alias": {
            "en": "SK",
            "kr": "SK"
        },
        "img": "teams/SK.png"
    },
    {
        "id": "Hanhwa",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "Hanhwa Eagles",
            "kr": "한화 이글스"
        },
        "alias": {
            "en": "Hanhwa",
            "kr": "한화"
        },
        "img": "teams/Hanhwa.png"
    },
    {
        "id": "Lotte",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "Lotte Giants",
            "kr": "롯데 자이언츠"
        },
        "alias": {
            "en": "Lotte",
            "kr": "롯데"
        },
        "img": "teams/Lotte.png"
    },
    {
        "id": "Samsung",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "Samsung Lions",
            "kr": "삼성 라이온즈"
        },
        "alias": {
            "en": "Samsung",
            "kr": "삼성"
        },
        "img": "teams/Samsung.png"
    },
    {
        "id": "KT",
        "type": "team",
        "league": "KBO",
        "name": {
            "en": "KT Wiz",
            "kr": "KT Wiz"
        },
        "alias": {
            "en": "KT",
            "kr": "KT"
        },
        "img": "teams/KT.png"
    },

    // MLB
    // American League
    // Eastern Region
    {
        "id": "Orioles",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Baltimore Orioles",
            "kr": "볼티모어 오리올스"
        },
        "alias": {
            "en": "Orioles",
            "kr": "오리올스"
        },
        "img": "teams/Orioles.png"
    },
    {
        "id": "RedSox",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Boston Red Sox",
            "kr": "보스턴 레드삭스"
        },
        "alias": {
            "en": "Red Sox",
            "kr": "레드 삭스"
        },
        "img": "teams/RedSox.png"
    },
    {
        "id": "Yankees",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "New York Yankees",
            "kr": "뉴욕 양키스"
        },
        "alias": {
            "en": "Yankees",
            "kr": "양키스"
        },
        "img": "teams/Yankees.png"
    },
    {
        "id": "Rays",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Tampa Bay Rays",
            "kr": "템파베이 레이스"
        },
        "alias": {
            "en": "Rays",
            "kr": "템파베이"
        },
        "img": "teams/Rays.png"
    },
    {
        "id": "BlueJays",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Toronto Blue Jays",
            "kr": "토론토 블루제이스"
        },
        "alias": {
            "en": "Blue Jays",
            "kr": "블루제이스"
        },
        "img": "teams/BlueJays.png"
    },
    // Middle Region
    {
        "id": "WhiteSox",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Chicago White Sox",
            "kr": "시카고 화이트 삭스"
        },
        "alias": {
            "en": "White Sox",
            "kr": "화이트 삭스"
        },
        "img": "teams/WhiteSox.png"
    },
    {
        "id": "Cleveland",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Cleveland Indians",
            "kr": "클리블랜드 인디언스"
        },
        "alias": {
            "en": "Cleveland",
            "kr": "클리블랜드"
        },
        "img": "teams/Cleveland.png"
    },
    {
        "id": "Detroit",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Detroit Tigers",
            "kr": "디트로이트 타이거즈"
        },
        "alias": {
            "en": "Detroit",
            "kr": "디트로이트"
        },
        "img": "teams/Detroit.png"
    },
    {
        "id": "KansasCity",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Kansas City Royals",
            "kr": "캔자스시티 로열스"
        },
        "alias": {
            "en": "Kansas City",
            "kr": "캔자스시티"
        },
        "img": "teams/KansasCity.png"
    },
    {
        "id": "Twins",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Minnesota Twins",
            "kr": "미네소타 트윈스"
        },
        "alias": {
            "en": "Minnesota",
            "kr": "미네소타"
        },
        "img": "teams/Twins.png"
    },
    // Western Region
    {
        "id": "Houston",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Houston Astros",
            "kr": "휴스턴 애스트로스"
        },
        "alias": {
            "en": "Houston",
            "kr": "휴스턴"
        },
        "img": "teams/Houston.png"
    },
    {
        "id": "Angels",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "LA Angels of Anaheim",
            "kr": "LA 에인젤스 오브 애너하임"
        },
        "alias": {
            "en": "Angels",
            "kr": "에인절스"
        },
        "img": "teams/Angels.png"
    },
    {
        "id": "Oakland",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Oakland Athlestics",
            "kr": "오클랜드 애슬레틱스"
        },
        "alias": {
            "en": "Oakland",
            "kr": "오클랜드"
        },
        "img": "teams/Oakland.png"
    },
    {
        "id": "Mariners",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Seattle Mariners",
            "kr": "시애틀 매리너스"
        },
        "alias": {
            "en": "Mariners",
            "kr": "매리너스"
        },
        "img": "teams/Mariners.png"
    },
    {
        "id": "Rangers",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Texas Rangers",
            "kr": "텍사스 레인저스"
        },
        "alias": {
            "en": "Texas Rangers",
            "kr": "레인저스"
        },
        "img": "teams/Rangers.png"
    },
    // National League
    // Eastern Region
    {
        "id": "Braves",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Atlanta Braves",
            "kr": "애틀랜다 브레이브스"
        },
        "alias": {
            "en": "Braves",
            "kr": "브레이브스"
        },
        "img": "teams/Braves.png"
    },
    {
        "id": "Marlins",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Miami Marlins",
            "kr": "마이애미 말린스"
        },
        "alias": {
            "en": "Marlins",
            "kr": "말린스"
        },
        "img": "teams/Marlins.png"
    },
    {
        "id": "Mets",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "New York Mets",
            "kr": "뉴욕 메츠"
        },
        "alias": {
            "en": "Mets",
            "kr": "메츠"
        },
        "img": "teams/Mets.png"
    },
    {
        "id": "Phillies",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Philadelphia Phillies",
            "kr": "필라델피아 필리스"
        },
        "alias": {
            "en": "Phillies",
            "kr": "필리스"
        },
        "img": "teams/Phillies.png"
    },
    {
        "id": "Nationals",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Washington Nationals",
            "kr": "워싱턴 내셔널스"
        },
        "alias": {
            "en": "Washington Nationals",
            "kr": "내셔널스"
        },
        "img": "teams/Nationals.png"
    },
    // Middle Region
    {
        "id": "Cubs",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Chicago Cubs",
            "kr": "시카고 컵스"
        },
        "alias": {
            "en": "Chicago Cubs",
            "kr": "시카고 컵스"
        },
        "img": "teams/Cubs.png"
    },
    {
        "id": "Cincinnati",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Cincinnati Reds",
            "kr": "신시내티 레즈"
        },
        "alias": {
            "en": "Cincinnati Reds",
            "kr": "신시내티 레즈"
        },
        "img": "teams/Cincinnati.png"
    },
    {
        "id": "Brewers",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Milwaukee Brewers",
            "kr": "밀워키 브루어스"
        },
        "alias": {
            "en": "Brewers",
            "kr": "브루어스"
        },
        "img": "teams/Brewers.png"
    },
    {
        "id": "Pirates",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Pittsburgh Pirates",
            "kr": "피츠버그 파이리츠"
        },
        "alias": {
            "en": "Pirates",
            "kr": "파이리츠"
        },
        "img": "teams/Pirates.png"
    },
    {
        "id": "Cardinals",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Saint Louis Cardinals",
            "kr": "세인트루이스 카디널스"
        },
        "alias": {
            "en": "St Louis Cardinals",
            "kr": "카디널스"
        },
        "img": "teams/Cardinals.png"
    },
    // Western Region
    {
        "id": "Diamondbacks",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Arizona Diamondbacks",
            "kr": "애리조나 다이아몬드백스"
        },
        "alias": {
            "en": "Diamondbacks",
            "kr": "다이아몬드백스"
        },
        "img": "teams/Diamondbacks.png"
    },
    {
        "id": "Rockies",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Colorado Rockies",
            "kr": "콜로라도 로키스"
        },
        "alias": {
            "en": "Rockies",
            "kr": "로키스"
        },
        "img": "teams/Rockies.png"
    },
    {
        "id": "Dodgers",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "Los Angeles Dodgers",
            "kr": "로스앤젤레스 다저스"
        },
        "alias": {
            "en": "LA Dodgers",
            "kr": "LA 다저스"
        },
        "img": "teams/Dodgers.png"
    },
    {
        "id": "Padres",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "San Diego Padres",
            "kr": "샌디에이고 파드리스"
        },
        "alias": {
            "en": "Padres",
            "kr": "파드리스"
        },
        "img": "teams/Padres.png"
    },
    {
        "id": "Giants",
        "type": "team",
        "league": "MLB",
        "name": {
            "en": "San Francisco Giants",
            "kr": "샌프란시스코 자이언츠"
        },
        "alias": {
            "en": "San Francisco Giants",
            "kr": "샌프란시스코 자이언츠"
        },
        "img": "teams/Giants.png"
    },

    // NPB
    // Central League
    {
        "id": "Yomiuri",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Yomiuri Giants",
            "kr": "요미우리 자이언츠"
        },
        "alias": {
            "en": "Yomiuri Giants",
            "kr": "요미우리 자이언츠"
        },
        "img": "teams/Yomiuri.png"
    },
    {
        "id": "Chunichi",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Chunichi Dragons",
            "kr": "주니치 드래곤즈"
        },
        "alias": {
            "en": "Chunichi Dragons",
            "kr": "주니치 드래곤즈"
        },
        "img": "teams/Chunichi.png"
    },
    {
        "id": "Hanshin",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Hanshin Tigers",
            "kr": "한신 타이거즈"
        },
        "alias": {
            "en": "Hanshin Tigers",
            "kr": "한신 타이거즈"
        },
        "img": "teams/Hanshin.png"
    },
    {
        "id": "Hiroshima",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Hiroshima Toyo Carp",
            "kr": "히로시마 토요 카프"
        },
        "alias": {
            "en": "Hiroshima Carp",
            "kr": "히로시마 카프"
        },
        "img": "teams/Hiroshima.png"
    },
    {
        "id": "Yokohama",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Yokohama DeNA Baystars",
            "kr": "요코하마 디엔에이 베이스타즈"
        },
        "alias": {
            "en": "Yokohama Baystars",
            "kr": "요코하마 베이스타즈"
        },
        "img": "teams/Yokohama.png"
    },
    {
        "id": "Tokyo",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Tokyo Yakult Swallows",
            "kr": "도쿄 야쿠르트 스왈로즈"
        },
        "alias": {
            "en": "Tokyo Swallows",
            "kr": "도쿄 스왈로즈"
        },
        "img": "teams/Tokyo.png"
    },
    // Pacific League
    {
        "id": "Hokkaido",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Hokkaido Nippon-Ham Fighters",
            "kr": "홋카이도 닛폰햄 파이터즈"
        },
        "alias": {
            "en": "Hokkaido Fighters",
            "kr": "홋카이도 파이터즈"
        },
        "img": "teams/Hokkaido.png"
    },
    {
        "id": "Fukuoka",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Fukuoka SoftBank Hawks",
            "kr": "후쿠오카 소프트뱅크 호크스"
        },
        "alias": {
            "en": "Fukuoka Hawks",
            "kr": "후쿠오카 호크스"
        },
        "img": "teams/Fukuoka.png"
    },
    {
        "id": "Chiba",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Chiba Lotte Marines",
            "kr": "치바 롯데 마린즈"
        },
        "alias": {
            "en": "Chiba Marines",
            "kr": "치바 마린즈"
        },
        "img": "teams/Chiba.png"
    },
    {
        "id": "Saitama",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Saitama Seibu Lions",
            "kr": "사이타마 세이부 라이온즈"
        },
        "alias": {
            "en": "Saitama Lions",
            "kr": "사이타마 라이온즈"
        },
        "img": "teams/Saitama.png"
    },
    {
        "id": "Tohoku",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Tohoku Rakuten Golden Eagles",
            "kr": "토호쿠 라쿠텐 골든이글스"
        },
        "alias": {
            "en": "Tohoku Golden Eagles",
            "kr": "토호쿠 골든이글스"
        },
        "img": "teams/Tohoku.png"
    },
    {
        "id": "Orix",
        "type": "team",
        "league": "NPB",
        "name": {
            "en": "Orix Buffaloes",
            "kr": "오릭스 버팔로즈"
        },
        "alias": {
            "en": "Orix Buffaloes",
            "kr": "오릭스 버팔로즈"
        },
        "img": "teams/Orix.png"
    },

    // Baskeetball
    // KBL
    {
        "id": "WonjuDongbu",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Wonju Dongbu Promy",
            "kr": "원주 동부 프로미"
        },
        "alias": {
            "en": "Wonju Dongbu",
            "kr": "원주 동부"
        },
        "img": "teams/WonjuDongbu.png"
    },
    {
        "id": "UlsanMobis",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Ulsan Mobis Phoebus",
            "kr": "울산 모비스 피버스"
        },
        "alias": {
            "en": "Ulsan Mobis",
            "kr": "울산 모비스"
        },
        "img": "teams/UlsanMobis.png"
    },
    {
        "id": "SeoulSamsung",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Seoul Samsung Thunders",
            "kr": "서울 삼성 썬더즈"
        },
        "alias": {
            "en": "Seoul Samsung",
            "kr": "서울 삼성"
        },
        "img": "teams/SeoulSamsung.png"
    },
    {
        "id": "SeoulSK",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Seoul SK Knights",
            "kr": "서울 SK 나이츠"
        },
        "alias": {
            "en": "Seoul SK",
            "kr": "서울 SK"
        },
        "img": "teams/SeoulSK.png"
    },
    {
        "id": "ChangwonLG",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Changwon LG Sakers",
            "kr": "창원 LG 세이커스"
        },
        "alias": {
            "en": "Changwon LG",
            "kr": "창원 LG"
        },
        "img": "teams/ChangwonLG.png"
    },
    {
        "id": "GoyangOrion",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Goyang Orion Orions",
            "kr": "고양 오리온 오리온스"
        },
        "alias": {
            "en": "Goyang Orion",
            "kr": "고양 오리온"
        },
        "img": "teams/GoyangOrion.png"
    },
    {
        "id": "IncheonET",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Incheon ET-Land Elephants",
            "kr": "인천 전자랜드 엘리펀츠"
        },
        "alias": {
            "en": "Incheon ET-Land",
            "kr": "인천 전자랜드"
        },
        "img": "teams/IncheonET.png"
    },
    {
        "id": "JeonjuKCC",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Jeonju KCC Egjs",
            "kr": "전주 KCC 이지스",
        },
        "alias": {
            "en": "Jeonju KCC",
            "kr": "전주 KCC"
        },
        "img": "teams/JeonjuKCC.png"
    },
    {
        "id": "AnyangKGC",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Anyang KGC",
            "kr": "안양 KGC 인삼공사",
        },
        "alias": {
            "en": "Anyang KGC",
            "kr": "안양 인삼공사"
        },
        "img": "teams/AnyangKGC.png"
    },
    {
        "id": "BusanKT",
        "type": "team",
        "league": "KBL",
        "name": {
            "en": "Busan KT Sonicboom",
            "kr": "부산 KT 소닉붐",
        },
        "alias": {
            "en": "Busan KT",
            "kr": "부산 KT"
        },
        "img": "teams/BusanKT.png"
    },

    // NBA
    // Eastern Conference
    // Atheletic Division
    {
        "id": "BostonCeltics",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Boston Celtics",
            "kr": "보스턴 셀틱스",
        },
        "alias": {
            "en": "Boston Celtics",
            "kr": "보스턴 셀틱스"
        },
        "img": "teams/BostonCeltics.png"
    },
    {
        "id": "BrooklynNets",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Brooklyn Nets",
            "kr": "브루클린 네츠",
        },
        "alias": {
            "en": "Brooklyn Nets",
            "kr": "브루클린 네츠"
        },
        "img": "teams/BrooklynNets.png"
    },
    {
        "id": "NYKnicks",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "New York Knicks",
            "kr": "뉴욕 닉스",
        },
        "alias": {
            "en": "NY Knicks",
            "kr": "뉴욕 닉스"
        },
        "img": "teams/NYKnicks.png"
    },
    {
        "id": "Philadelphia76",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Philadelphia 76ers",
            "kr": "필라델피아 세븐티식서스",
        },
        "alias": {
            "en": "Philadelphia 76",
            "kr": "필라델피아 76"
        },
        "img": "teams/Philadelphia76.png"
    },
    {
        "id": "TorontoRaptors",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Toronto Raptors",
            "kr": "토론토 랩터스",
        },
        "alias": {
            "en": "Toronto Raptors",
            "kr": "토론토 랩터스"
        },
        "img": "teams/TorontoRaptors.png"
    },
    // Central Division
    {
        "id": "ChicagoBulls",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Chicago Bulls",
            "kr": "시카고 불스",
        },
        "alias": {
            "en": "Chicago Bulls",
            "kr": "시카고 불스"
        },
        "img": "teams/ChicagoBulls.png"
    },
    {
        "id": "ClevelandCavaliers",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Cleveland Cavaliers",
            "kr": "클리브랜드 캐벌리어스",
        },
        "alias": {
            "en": "Cleveland Cavaliers",
            "kr": "클리브랜드 캐벌리어스"
        },
        "img": "teams/ClevelandCavaliers.png"
    },
    {
        "id": "DetroitPistons",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Detroit Pistons",
            "kr": "디트로이트 피스톤즈",
        },
        "alias": {
            "en": "Detroit Pistons",
            "kr": "디트로이트 피스톤즈"
        },
        "img": "teams/DetroitPistons.png"
    },
    {
        "id": "IndianaPacers",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Indiana Pacers",
            "kr": "인디애나 페이서스",
        },
        "alias": {
            "en": "Indiana Pacers",
            "kr": "인디애나 페이서스"
        },
        "img": "teams/IndianaPacers.png"
    },
    {
        "id": "MilwaukeeBucks",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Milwaukee Bucks",
            "kr": "밀워키 벅스",
        },
        "alias": {
            "en": "Milwaukee Bucks",
            "kr": "밀워키 벅스"
        },
        "img": "teams/MilwaukeeBucks.png"
    },
    // South-east Division
    {
        "id": "AtlantaHawks",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Atlanta Hawks",
            "kr": "애틀랜타 호크스",
        },
        "alias": {
            "en": "Atlanta Hawks",
            "kr": "애틀랜타 호크스"
        },
        "img": "teams/AtlantaHawks.png"
    },
    {
        "id": "CharlotteHornets",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Charlotte Hornets",
            "kr": "샬럿 호네츠",
        },
        "alias": {
            "en": "Charlotte Hornets",
            "kr": "샬럿 호네츠"
        },
        "img": "teams/CharlotteHornets.png"
    },
    {
        "id": "MiamiHeat",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Miami Heat",
            "kr": "마이애미 히트",
        },
        "alias": {
            "en": "Miami Heat",
            "kr": "마이애미 히트"
        },
        "img": "teams/MiamiHeat.png"
    },
    {
        "id": "OrlandoMagic",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Orlando Magic",
            "kr": "올랜도 매직",
        },
        "alias": {
            "en": "Orlando Magic",
            "kr": "올랜도 매직"
        },
        "img": "teams/OrlandoMagic.png"
    },
    {
        "id": "WashingtonWizards",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Washington Wizards",
            "kr": "워싱턴 위저즈",
        },
        "alias": {
            "en": "Washington Wizards",
            "kr": "워싱턴 위저즈"
        },
        "img": "teams/WashingtonWizards.png"
    },

    // Western Conference
    // North-west division
    {
        "id": "DenverNuggets",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Denver Nuggets",
            "kr": "덴버 너기츠",
        },
        "alias": {
            "en": "Denver Nuggets",
            "kr": "덴버 너기츠"
        },
        "img": "teams/DenverNuggets.png"
    },
    {
        "id": "MinnesotaTimberwolves",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Minnesota Timberwolves",
            "kr": "미네소타 팀버울브스",
        },
        "alias": {
            "en": "Minnesota Timberwolves",
            "kr": "미네소타 팀버울브스"
        },
        "img": "teams/MinnesotaTimberwolves.png"
    },
    {
        "id": "PortlandBlazers",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Portland Trail Blazers",
            "kr": "포틀랜드 트레일블레이저스",
        },
        "alias": {
            "en": "Portland Blazers",
            "kr": "포틀랜드 블레이저스"
        },
        "img": "teams/PortlandBlazers.png"
    },
    {
        "id": "OklahomaThunder",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Oklahoma City Thunder",
            "kr": "오클라호마씨티 썬더",
        },
        "alias": {
            "en": "Oklahoma Thunder",
            "kr": "오클라호마 썬더"
        },
        "img": "teams/OklahomaThunder.png"
    },
    {
        "id": "UtahJazz",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Utah Jazz",
            "kr": "유타 재즈",
        },
        "alias": {
            "en": "Utah Jazz",
            "kr": "유타 재즈"
        },
        "img": "teams/UtahJazz.png"
    },
    // Pacific Division
    {
        "id": "GoldenState",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Golden State Warriors",
            "kr": "골든스테이트 워리어스",
        },
        "alias": {
            "en": "Golden State",
            "kr": "골든스테이트"
        },
        "img": "teams/GoldenState.png"
    },
    {
        "id": "LALakers",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Los Angeles Lakers",
            "kr": "로스엔젤레스 레이커스",
        },
        "alias": {
            "en": "LA Lakers",
            "kr": "LA 레이커스"
        },
        "img": "teams/LALakers.png"
    },
    {
        "id": "LAClippers",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Los Angeles Clippers",
            "kr": "로스앤젤레스 클리퍼스",
        },
        "alias": {
            "en": "LA Clippers",
            "kr": "LA 클리퍼스"
        },
        "img": "teams/LAClippers.png"
    },
    {
        "id": "PhoenixSuns",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Phoenix Suns",
            "kr": "피닉스 선즈",
        },
        "alias": {
            "en": "Phoenix Suns",
            "kr": "피닉스 선즈"
        },
        "img": "teams/PhoenixSuns.png"
    },
    {
        "id": "SacramentoKings",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Sacramento Kings",
            "kr": "새크라멘토 킹스",
        },
        "alias": {
            "en": "Sacramento Kings",
            "kr": "새크라멘토 킹스"
        },
        "img": "teams/SacramentoKings.png"
    },
    // South-west Division
    {
        "id": "DallasMavericks",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Dallas Mavericks",
            "kr": "댈러스 매버릭스",
        },
        "alias": {
            "en": "Dallas Mavericks",
            "kr": "댈러스 매버릭스"
        },
        "img": "teams/DallasMavericks.png"
    },
    {
        "id": "HoustonRockets",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Houston Rockets",
            "kr": "휴스턴 로키츠",
        },
        "alias": {
            "en": "Houston Rockets",
            "kr": "휴스턴 로키츠"
        },
        "img": "teams/HoustonRockets.png"
    },
    {
        "id": "MemphisGrizzlies",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "Memphis Grizzlies",
            "kr": "멤피스 그리즐리스",
        },
        "alias": {
            "en": "Memphis Grizzlies",
            "kr": "멤피스 그리즐리스"
        },
        "img": "teams/MemphisGrizzlies.png"
    },
    {
        "id": "NewOrleansPelicans",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "New Orleans Pelicans",
            "kr": "뉴올리언스 펠리컨스",
        },
        "alias": {
            "en": "New Orleans Pelicans",
            "kr": "뉴올리언스 펠리컨스"
        },
        "img": "teams/NewOrleansPelicans.png"
    },
    {
        "id": "SanAntonioSpurs",
        "type": "team",
        "league": "NBA",
        "name": {
            "en": "San Antonio Spurs",
            "kr": "샌안토니오 스퍼스",
        },
        "alias": {
            "en": "San Antonio Spurs",
            "kr": "샌안토니오 스퍼스"
        },
        "img": "teams/SanAntonioSpurs.png"
    }
];

const monk = require('monk')
const url = 'localhost:27017/main';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server');
});

const collection = db.get('teams');
console.log(teams);
collection.remove();
collection.insert(teams)
    .then((docs) => {
        console.log('Successfully added teams keywords.');
    })
    .catch((err) => {
        console.log('Error while adding teams keywords.');
    })
    .then(() => db.close());
