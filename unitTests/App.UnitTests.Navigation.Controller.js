/*********************************************************************
 * Created by Anton Baksheiev on 03.09.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
describe('myDirectiveController', function() {
    it('should write the bound name to the log', inject(function($controller, $log) {
        var ctrl = $controller('MyDirectiveController', { /* no locals */ }, { name: 'Clark Kent' });
        expect(ctrl.name).toEqual('Clark Kent');
        expect($log.info.logs).toEqual(['Clark Kent']);
    });
});