import * as Yup from "yup";

export const sendMailSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, "fullname 20 veya daha az karakter olmalıdır")
    .required("Lutfen firstName kismini bos birakmayiniz"),
  lastName: Yup.string()
    .max(20, "fullname 20 veya daha az karakter olmalıdır")
    .required("Lutfen lastName kismini bos birakmayiniz"),
  email: Yup.string()
    .email("Lutfen gecerli email adresini giriniz.")
    .required("Lutfen email kismini bos birakmayiniz"),
  textarea: Yup.string()
    .max(500, "fullname 500 veya daha az karakter olmalıdır")
    .required("Lutfen text kismini bos birakmayiniz"),
  //   password: Yup.string()
  //     .min(8, "Sifre en az 8 karakter icermelidir")
  //     .max(16, "Sifre en fazla 16 karakter icermelidir.")
  //     .required("Lutfen password kismini bos birakmayiniz")
  //     .matches(/\d+/, "Sifre rakam icermelidir")
  //     .matches(/[a-z]+/, "Sifre kucuk harf icermelidir")
  //     .matches(/[A-Z]+/, "Sifre buyuk harf icermelidir")
  //     .matches(/[!,?{}><%&$#£+-.]+/, "Sifreniz ozel karakter icermelidir"),
});
