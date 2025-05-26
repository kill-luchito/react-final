import Page from './../components/shared/page'
import TablaEstudiantes from '../components/pages/TablaEstudiantes'


function Home () {
    return (
        <Page>
            <h3>Bienvenido a la lista de estudiantes
                <p>aqui podra encontrar las nostas y las materias</p>
            </h3>
            <TablaEstudiantes/>
        </Page>
    )
}

export default Home