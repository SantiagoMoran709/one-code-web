export const cafe = {
  name: 'Café Estudio',
  whatsapp: '', // Número internacional, solo dígitos, cuando el negocio lo confirme.
  address: '5a Avenida 12-34, Zona 10',
  city: 'Ciudad de Guatemala',
  demo: true,
};
export const products = [
  {id:'latte',name:'Latte Clásico',category:'Bebidas',price:25,image:'latte',featured:true,description:'Espresso y leche vaporizada, con una textura suave y el balance perfecto para acompañar tus ideas.',details:'12 oz · Caliente',allergens:'Contiene leche.'},
  {id:'cold',name:'Iced Latte',category:'Bebidas',price:30,image:'frappe',featured:true,description:'Nuestro clásico espresso con leche y hielo. Una pausa refrescante para seguir creando.',details:'16 oz · Frío',allergens:'Contiene leche.'},
  {id:'cake',name:'Cheesecake de Frutos Rojos',category:'Postres',price:38,image:'cheesecake',featured:true,description:'Cremoso cheesecake sobre una base crujiente, acompañado de frutos rojos.',details:'Porción individual',allergens:'Contiene leche, huevo y gluten.'},
  {id:'croissant',name:'Croissant de Mantequilla',category:'Salados',price:24,image:'croissant',featured:true,description:'Capas delicadas, exterior dorado y un centro suave. Ideal para acompañar tu café favorito.',details:'Una unidad · Horneado',allergens:'Contiene gluten, leche y huevo.'},
  {id:'espresso',name:'Espresso',category:'Bebidas',price:18,image:'espresso',description:'Pequeño, intenso y lleno de carácter. El punto de partida de un buen día.',details:'Doble · Caliente',allergens:'Sin leche en su preparación base.'},
  {id:'sandwich',name:'Sándwich de la Casa',category:'Salados',price:42,image:'sandwich',description:'Pan tostado y un relleno generoso para una pausa que también alimenta.',details:'Porción individual',allergens:'Contiene gluten y leche. Ingredientes por confirmar.'},
];
export const slides = [
  {image:'latte',eyebrow:'CAFÉ · ESTUDIO · IDEAS',title:<>Un espacio para<br/>estudiar, trabajar<br/>y <em>disfrutar.</em></>,description:'Café de especialidad, ambiente tranquilo y el lugar perfecto para tus ideas.',alt:'Preparación de un latte con arte de leche'},
  {image:'interior',eyebrow:'TU MESA TE ESPERA',title:<>Haz una pausa.<br/>Encuentra tu<br/><em>inspiración.</em></>,description:'Una conversación, un proyecto o ese libro pendiente. Aquí hay espacio para todo.',alt:'Interior luminoso de una cafetería con mesas de madera'},
  {image:'hero',eyebrow:'CADA TAZA, UN MOMENTO',title:<>El ritual de<br/>hacer las cosas<br/><em>con calma.</em></>,description:'Aroma, sabor y pequeños detalles para disfrutar de una buena taza de café.',alt:'Preparación artesanal de café con un método de filtrado'},
];
export const money = value => `Q${value.toFixed(2)}`;
