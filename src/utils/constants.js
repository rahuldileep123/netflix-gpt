
const TMBD_API_KEY = import.meta.env.VITE_TMBD_API_KEY
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMBD_API_KEY}`
    }
  };

  export const IMG_URL="https://image.tmdb.org/t/p/w200/"

  export const MAIN_BG="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"

  export const SUPPORTED_LANGUAGES=[
    {
      identifier:"en",
      name:"English",
    },
    {
      identifier:"hindi",
      name:"हिंदी",
    },
    {
      identifier:"malayalam",
      name:"മലയാളം",
    }
  ]

  export const GEMINI_AI_KEY="AIzaSyCs-LROADwG6ok4mNFVNgulblsx7KwgEJw"

  