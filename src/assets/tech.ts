export enum Tech {
  js = "js",
  css = "css",
  html = "html",
  reactjs = "reactjs",
  firebase = "firebase",
  ts = "ts",
  tailwind = "tailwind",
  mongo = "mongo",
  vscode = "vscode",
  python = "python",
  vite = "vite",
  vue = "vue",
  rust = "rust",
  java = "java",
  cplusplus = "cplusplus"
}

const tech = {
  reactjs: {
    src: "https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png?f=avif&w=256",
    alt: "reactjs icon",
    url: "https://reactjs.org/",
    title: "React.js"
  },
  ts: {
    src: "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png?f=avif&w=256",
    alt: "typescript icon",
    url: "https://www.typescriptlang.org",
    title: "Typescript"
  },
  tailwind: {
    src: "https://www.nstinfotech.com/wp-content/uploads/2020/10/tailwind-logo.png",
    alt: "tailwind css icon",
    url: "https://tailwindcss.com/",
    title: "Tailwind CSS"
  },
  js: {
    src: "https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png?f=avif&w=256",
    alt: "javascript icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    title: "Javascript"
  },
  html: {
    src: "https://cdn.iconscout.com/icon/free/png-512/html-5-1-1175208.png?f=avif&w=256",
    alt: "html icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    title: "Html 5"
  },
  css: {
    src: "https://cdn.iconscout.com/icon/free/png-512/css3-11-1175239.png?f=avif&w=256",
    alt: "css icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "CSS 3"
  },
  mongo: {
    src: "https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png?f=avif&w=256",
    alt: "mongodb icon",
    url: "https://www.mongodb.com/",
    title: "MongoDB"
  },
  vscode: {
    src: "https://cdn.iconscout.com/icon/free/png-512/visual-studio-code-3251603-2724650.png?f=avif&w=256",
    alt: "vscode icon",
    url: "https://code.visualstudio.com/",
    title: "Visual studio code"
  },
  firebase: {
    src: "https://cdn.iconscout.com/icon/free/png-512/firebase-1-282796.png?f=avif&w=256",
    alt: "firebase icon",
    url: "https://firebase.google.com/",
    title: "Firebase"
  },
  python: {
    src: "https://cdn.iconscout.com/icon/free/png-512/python-3521655-2945099.png?f=avif&w=256",
    alt: "python icon",
    url: "https://www.python.org/",
    title: "Python"
  },
  vite: {
    src: "https://vitejs.dev/logo.svg",
    alt: "vitejs icon",
    url: "https://vitejs.dev/",
    title: "Vitejs"
  },
  vue: {
    src: "https://cdn.iconscout.com/icon/free/png-512/vue-282497.png?f=avif&w=256",
    alt: "vue icon",
    url: "https://vuejs.org/",
    title: "Vue"
  },
  rust: {
    src: "https://lh3.googleusercontent.com/0Zfz1SU4docw7K2tKpNqGjKfh481ju78IjyBcc0QtUk2Lfy_fiLdutOM3EYKy9p4OPMC8T6AMkTqRM49z35G3LEQJtaVGIcUpDq_lT8KhDB5CwquGtJhO9yVFqCa-qL-Eci8c0k8SwvqJUrB7MdVbDQK3OqT8iPczEHgyu6BVniSx0y5atUjpaiq1v4u84_D3qL9PPHMHKhGEDtUTByUBd5Xy0oq9ThM7SZi5m1WUFAqGZwq491X2A_AdqBsjc78LQCvtnkW4yBTYb5BxV41iihVSbbzjKGsX02O3iWjOf4bJ_tDeWmXLrkUyngki-GSBIZpzJfxIK_AHlFnB20FhMICFB99D2KIlPTR2VOVz66b8Yldl3Jimr7NlzD4H5q5pD2VfIc9dfTO85MvY_epZaVEsUDuRzuxYhL7THUErswT4C53PO0d0eQdcXE5HSITXsSPNwTzqzCAY_J0X8LL21soMbkUApLxowFkVMpL9Y0pTehVlqFqL31h4L08L4qE06apfs3cFspSIEFHxAGUPEMCs1v1avjdlyua23G8CNSgp3dTojlvlChWrzLpvaVUCUM7QhKNE76p-QydQTP26KbL7JaQVWgoS0xZG_lW7ASyCgLG-cobDanb_SwtUo2G7fKU9Gw3ojpAPakfPwxuSeGfZaoRuNPM-Cc8_oyc65mNZVf-OytgXP9GESp-7OLZTlRkDfLdgsB9CYVrN8THDWX-3oagM6UsgwN51RIKPeRgLyGZKcptmhWieB5fIQCPSQ_thoWex3EsuqXoPgS5d0zUl9Fsy9w1vpPzfxIeHCKdIzQPrt4KgZxoS-ysjYfAoocJ_6mhdQc6AvawO9L2BRurvGOjz1VHyQ-MSWyhcspgy13f2E--unD-f5HwNVPMUUjaTP1m6_Gm2v12p8ogo0CPV6LPzIiqOcOPnmfGAdCu1C9rvk5q6citNeWmvOQEzjlErYYbT3aaUnCgAMVt_kLqk1Pdk4wrhnSAxw7V27FnPFOBBdzFgI0H1WnUgeZ_LDCshbmrxPZHsBy9GGa2JnIUkQFOotNm0n2ljFGNAvqxrnTJvYHBRzzj=s128-no?authuser=4",
    alt: "rust icon",
    url: "https://www.rust-lang.org/",
    title: "Rust"
  },
  java: {
    src: "https://cdn.iconscout.com/icon/free/png-512/java-22-225997.png?f=avif&w=256",
    alt: "java icon",
    url: "https://www.java.com/en/",
    title: "Java"
  },
  cplusplus: {
    src: "https://lh3.googleusercontent.com/wM41MjFIANpdHgBjBMjaJEx2piP0QyaQ4YklvT1E_pUPh4VAnaGM3QMm-8H_8pXXU6Tp_8QXcEZ74s_bUvjdHkTHuE8PVNB-yKEYds-io4NfkgRp_ciVGm3AtueBgmWyNFhWYBAac5yXqkTisiIkUZtk4uVgU3DXhO2btkEFLAQe0ChhnSWeCDWoEtr3M6PfWpXwRZSj3NidIp2jXZkeYco0tccdfOoOdCOiy53-K_jTno94X1Ui19i7Pocc1mW-Z-EVVcvCMjNarX7_IrQC6mpSmkM8wqykYdLsA1kgP-4RP2xtcogNcygxM_daiqeYjyt8U43zxvdKnexkDMlp2f82-vDN67o2v81DApcsVM4aPAZ4cn1iCe-GRrRI0cRAFTD2cF39zRhylfcRZ2Mj1-eWjpZ357n7yc0cK2Ub3wtpEe5gDB0EJmWWbDpnA2RWgDS-FrAxnusXxbrS_esGc4K7zLsrm5oeQz_ws3-5wyUhvhdOPq-lJVcwZNt61qAmbaLwSNxJ3giWi8tp6GS1CCvrEF95JRcbEs6lIRfFMbXgVVZClGmF7kSeq6utIYI3qwV2CZo77FbjkNE8P4bC6F5qILghGFoNbM6-tcAUXKQB9GNtom8nbJeWti7HJH1OcSS2xlysNq_mER6hLSzs4_GN97fncF_rYeQ7yWsn4QRShNpXh_DPx_r2h7PjuNEi19vMEaeCspOicYEgr8Ke0QDFj1AfR86UJdwEEQI52lPr2gAIMAnb1DHg3zPCyfb6_W57gtzphJMsU9h7eRMuRj2jjG2n538KczYtqh3i3oMpTtpMxWfgClZ9jyAE7SiVv-Dis_UYKjHJrw9n1k5NfGf080rBWh3O0WWmByor_F5gxr_cW7foPO_8uQNBC05MKbLtBErbiCWBI9wR2Lxco_gwAv0nNlrs52qrQg1ZwzeMW5g24qDEsnOs6T4CHnETJ5fSc-wZFNI8nMnFzqPrZPhS0IDj5dv3ijYbKU6DU5GfQSEPoOHBIv9sK7qPSThiSLyRRVZued6AKRos1OHLxm94IetH4Odh6Za8Q0a45_64EPCLhhU6gDEt=s512-no?authuser=4",
    alt: "c++ icon",
    url: "",
    title: "c++"
  }
};

export default tech;
