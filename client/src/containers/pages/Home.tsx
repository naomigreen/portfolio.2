import Content from '../../components/content/Content'
import Card from '../../components/card/Card'
import { workData } from '../../data/data';
import { themes } from '../../utils/theme/theme';

type HomeProps = {
  theme: keyof typeof themes;
}

const Home = (theme: HomeProps) => {

  const getLogo = (darkLogo: string, lightLogo: string | undefined) => {
    if (theme.theme === 'light') {
      return lightLogo ? lightLogo : darkLogo
    }
    return darkLogo
  }

  return (
    <Content>
      {workData.map((d, i) => (
        <Card key={d.link} logo={getLogo(d.logo, d.lightLogo)} width={d.width} maxWidth={d.maxWidth} link={d.link} text={d.text} divider={i === 9 ? false : true} />
      ))}
    </Content>
  )
}

export default Home