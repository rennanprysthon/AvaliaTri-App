import React from 'react';
import { Container, Link, Icon, Count} from './styles';

export default function Controles({page, onBack, onFoward, total}) {
  return (
    <Container>
      <Link onPress={() => page > 0 ? onBack(): {}}>
        <Icon name="skip-previous"/>
      </Link>
      <Count>{page + 1}/{total + 1}</Count>
      <Link onPress={() => page == total ? {} : onFoward()}>
        <Icon name="skip-next"/>
      </Link>
    </Container>
  );
}
