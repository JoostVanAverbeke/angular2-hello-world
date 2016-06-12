import { AppComponent} from './app.component'

describe('AppComponent', () => {
    beforeEach(function() {
        this.app = new AppComponent();
    });

    it('has a hello property', function() {
        expect(this.app.hello).toBe('Hello');
    });
});