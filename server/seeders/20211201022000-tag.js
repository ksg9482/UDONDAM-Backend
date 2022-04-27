'use strict';
let area = [
  '서울특별시', '부산광역시', '대구광역시','인천광역시','광주광역시','대전광역시','울산광역시','세종특별자치시','수원시','성남시','의정부시','안양시','부천시','광명시','동두천시','평택시','안산시','고양시','과천시','구리시','남양주시','오산시','시흥시','군포시','의왕시','하남시','용인시','파주시','이천시','안성시','김포시','화성시','광주시','양주시','포천시','여주시','연천군','가평군','양평군','춘천시','원주시','강릉시','동해시','태백시','속초시','삼척시','홍천군','횡성군','영월군','평창군','정선군','철원군','화천군','양구군','인제군','고성군','양양군','청주시','충주시','제천시','보은군','옥천군','영동군','증평군','진천군','괴산군','음성군','단양군','천안시','공주시','보령시','아산시','서산시','논산시','계룡시','당진시','금산군','부여군','서천군','청양군','홍성군','예산군','태안군','전주시','군산시','익산시','정읍시','남원시','김제시','완주군','진안군','무주군','장수군','임실군','순창군','고창군','부안군','목포시','여수시','순천시','나주시','광양시','담양군','곡성군','구례군','고흥군','보성군','화순군','장흥군','강진군','해남군','영암군','무안군','함평군','영광군','장성군','완도군','진도군','신안군','포항시','경주시','김천시','안동시','구미시','영주시','영천시','상주시','문경시','경산시','군위군','의성군','청송군','영양군','영덕군','청도군','고령군','성주군','칠곡군','예천군','봉화군','울진군','울릉군','창원시','진주시','통영시','사천시','김해시','밀양시','거제시','양산시','의령군','함안군','창녕군','고성군','하동군','산청군','함양군','거창군','합천군','제주시','서귀포시'
]
let arr =[
  '여행', '게임', '소문', '유머', '산책', '자랑', '놀라운', '직장', '학교', '운동', '반려동물', '만화', '고민', '비밀', '음악', '흥미', '사고', '독서', '식사', '취미', '도움', '나눔', '연애', '만남', '자소서', '스포츠', '잡담', '알림', '질문', '일상','잡담','후기','영화','디자인','상담','취업','이력서','환경','맛집','데이트','화장실','건강','병원','공연','나눔','버스킹','사진','학생','버스','초콜릿','발렌타인','크리스마스','설날','명절','데일리','패션','카페','브런치','디저트','커피','tea','해외','부모','효도','학원','공부','코딩','꿀팁','잇템','책','스트리밍','방송','전기','자격증','영업','주식','코인','비트코인','담배','전자담배','액상담배','앨범','전자기기','컴퓨터','노트북','전화','월드컵','로또','rpg','fps','pc게임','콘솔게임','보드게임','코로나','오징어게임','자가진단','요소수','주유소','기름','세차','카센타','로블록스','의사','한식','중식','일식','양식','트렌드','구글','야구','축구','농구','인사','신화','병법','유튜브']

let areaTag = area.map((el,idx)=> {
  return ({id:idx + 1,
  content:el
  })
  })

  let contentTag = arr.map((el,idx)=> {
    return ({id:idx + area.length + 1,
    content:el
    })
    })
    
    let tags = areaTag.concat(contentTag)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tag', [
    ...tags
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tag', null, {});
  }
};