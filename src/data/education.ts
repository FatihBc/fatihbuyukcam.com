interface EducationWork {
  type: "education" | "work";
  degree: string;
  degree_tr: string;
  institution: string;
  from: string;
  until: string;
  details: string;
  details_tr: string;
}

const educationWork: EducationWork[] = [
  {
    type: "education",
    degree: "University",
    degree_tr: "Üniversite",
    institution: "Hacettepe University Medicine Faculty (English), Ankara, Turkey",
    from: "09/1998",
    until: "06/2006",
    details: "",
    details_tr: "",
  },
  {
    type: "education",
    degree: "Emergency Medicine Residency Program",
    degree_tr: "Acil Tıp Uzmanlık Eğitimi",
    institution: "Diskapi Yildirim Beyazit Education & Research Hospital, Ankara, Turkey",
    from: "12/2006",
    until: "06/2011",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
  {
    type: "education",
    degree: "Second University",
    degree_tr: "İkinci Üniversite",
    institution: "Anadolu University, Open Education Faculty, Department of Medical and Technical Services for the Program in Management of Health Instutitions",
    from: "10/2008",
    until: "05/2010",
    details: "",
    details_tr: "",
  },
  {
    type: "work",
    degree: "Resident Doctor",
    degree_tr: "Asistan Doktor",
    institution: "Diskapi Yildirim Beyazit Education & Research Hospital, Ankara, Turkey",
    from: "12/2006",
    until: "07/2011",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
  {
    type: "work",
    degree: "MD",
    degree_tr: "Uzman Dr.",
    institution: "Diskapi Yildirim Beyazit Education & Research Hospital, Ankara, Turkey",
    from: "08/2011",
    until: "09/2014",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
  {
    type: "work",
    degree: "Assoc.Prof.Dr.",
    degree_tr: "Doç.Dr.",
    institution: "Diskapi Yildirim Beyazit Education & Research Hospital, Ankara, Turkey",
    from: "10/2014",
    until: "12/2014",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
  {
    type: "work",
    degree: "Head of the Emergency Department",
    degree_tr: "Acil Tıp Bölüm Başkanı",
    institution: "Bagcilar Education & Research Hospital, İstanbul, Turkey",
    from: "01/2015",
    until: "12/2015",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
  {
    type: "work",
    degree: "Assoc.Prof.Dr.",
    degree_tr: "Doç.Dr.",
    institution: "Diskapi Yildirim Beyazit Education & Research Hospital, Ankara, Turkey",
    from: "01/2016",
    until: "09/2016",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
  {
    type: "work",
    degree: "Assoc.Prof.Dr.",
    degree_tr: "Doç.Dr.",
    institution: "Acibadem Eskisehir Hospital, Eskisehir, Turkey",
    from: "10/2016",
    until: "12.2017",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
  {
    type: "work",
    degree: "Emergency Physician and Vice Managing Director",
    degree_tr: "Acil Tıp Uzmanı ve Başhekim Yardımcısı",
    institution: "Memorial Ataşehir Hospital, Emergency Physician and Vice Managing Director",
    from: "01/2018",
    until: "06.2022",
    details: "Department of Emergency Medicine, 2019 July - 2021 August Managing Director",
    details_tr: "Acil Tıp Anabilim Dalı, 2019 Temmuz - 2021 Ağustos Başhekim",
  },
  {
    type: "work",
    degree: "Emergency Physician",
    degree_tr: "Acil Tıp Uzmanı",
    institution: "Acıbadem Ataşehir Hospital, Istanbul, Turkey",
    from: "06.2022",
    until: "Continue",
    details: "Department of Emergency Medicine",
    details_tr: "Acil Tıp Anabilim Dalı",
  },
];

export default educationWork;
