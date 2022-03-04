import React from 'react';
import {ScrollView} from 'react-native';
import HeaderContainer from './Header';
import SearchContainer from './Search';
import Destaques from './Destaques';
import Galery from './Galery';

const userData = [
  {
    image:
      'https://s3-alpha-sig.figma.com/img/b018/f931/23e1a8a86b512611c6bb14fc8e657973?Expires=1647216000&Signature=evgx9f6Fo8Rd1Zy3Y5zmNGuM3UWujSLypHOsd8J3eiyQvEo5KMnHcxNOEKAnce35yd66gtqNa5DPMohXJAOAfRZwisLV0O3P219OGMq0u0uPNtLU1FA9T~qk7uqEcF5UQmkAHonF2Bpgh5VUW16EmUJDw1Sp8vJMw4LGLwcvC6uCSqNZOVU~Mn8c9XCLucwJC2XUa6OCj6wW1FaAz7BXzjIYUiH8d0UkBjXnYVbC~OUi7PQxVfXE6tb7eUpkLl6bW2XqxHV~o9QfE2NYLccteuc0vJYHTktNlCzta~ZnZQJ3uVdEBvFcDfqXnINIUrNjjIamD7bpGMZl40K5NpqlVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Chevrolet Chevete 1986',
    time: 'dia',
    price: '670,00',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/a850/5ffc/a9849a90abec4b6565c4e3c82d6dfcdc?Expires=1647216000&Signature=dHsGLy8DbI1IAiqcJz3SUC13i7xwPf7L6D1t3ndXCWttVI9hkCo1sgHcei9k-yZWsnz-3n1q8I93UrB-CcQj-GvR0NV7EQQx6W5nyZdcOooJmZMzZEhe8jzqhEUcbiEIewaXD6ub5uVd4BSB3BbSh4jIDzlfC462pJW7t3cPoBI3yKoeTiVqVJ4kReuJ13h8ESoZnFgn1ZXLSGDkkS0RpdeL9-QjM6BbgIeWxPu8y4kDZoRIvRSTvEaKawJMVxrwzinUciPZrSGPeWC7-khXfHiYsYQTqcLZ99X-iYq9PAnU57ei130K4k~Xek9gVF4Q93Flfd733rwpa9j3bmcnTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Maverick 1978',
    time: 'dia',
    price: '1.270,00',
  },
  {
    image:
      'https://www.google.com/search?q=image&sxsrf=APq-WBvWgNLRvMMh9r9zs7UoSZgAa-4ckg:1646393752498&tbm=isch&source=iu&ictx=1&vet=1&fir=qXynBYpZpHkhWM%252CMqx_3YToIvrqYM%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253Bn5hAWsQ-sgKo_M%252C-UStXW0dQEx4SM%252C_%253BgxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BKy5znhB-THkFtM%252CZTF-spsyIZSgJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253BkwgHAQqTiLQXLM%252CR0KnAtfyBDsyiM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BY6OLqWIlBImPpM%252CLE00-JuLTmzMUM%252C_&usg=AI4_-kRt4OVV1XOeG5VzzDQRnZ6Wn20rCw&sa=X&ved=2ahUKEwiVt5zWrqz2AhXFKrkGHXdxBnQQ9QF6BAgEEAE#imgrc=qXynBYpZpHkhWM',
    name: 'Chevrolet Chevete 1986',
    time: 'dia',
    price: '670,00',
  },
  {
    image:
      'https://www.google.com/search?q=image&sxsrf=APq-WBvWgNLRvMMh9r9zs7UoSZgAa-4ckg:1646393752498&tbm=isch&source=iu&ictx=1&vet=1&fir=qXynBYpZpHkhWM%252CMqx_3YToIvrqYM%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253Bn5hAWsQ-sgKo_M%252C-UStXW0dQEx4SM%252C_%253BgxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BKy5znhB-THkFtM%252CZTF-spsyIZSgJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253BkwgHAQqTiLQXLM%252CR0KnAtfyBDsyiM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BY6OLqWIlBImPpM%252CLE00-JuLTmzMUM%252C_&usg=AI4_-kRt4OVV1XOeG5VzzDQRnZ6Wn20rCw&sa=X&ved=2ahUKEwiVt5zWrqz2AhXFKrkGHXdxBnQQ9QF6BAgEEAE#imgrc=qXynBYpZpHkhWM',
    name: 'Maverick 1978',
    time: 'dia',
    price: '1.270,00',
  },
];

const Feed = () => {
  return (
    <ScrollView>
      <HeaderContainer />
      <SearchContainer />
      <Destaques data={userData} />
      {/* <Galery data={userData} /> */}
      {/* <CardElias /> */}
      {/* <CardGalery data={userData}/> */}
    </ScrollView>
  );
};

export default Feed;
