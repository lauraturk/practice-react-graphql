import App, { Container } from 'next/app';
import Page from '../components/Page'

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }
}
/// put apollo store inside to persist the store

export default MyApp;