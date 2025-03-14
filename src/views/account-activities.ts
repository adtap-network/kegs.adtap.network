import View from '../view';
import ContextInterface from '../interfaces/context';
import AccountActivitiesService from '../services/account-activities';
import AccountActivityRow from '../rows/account-activity';

export default class AccountActivitiesView extends View {

        constructor(context: ContextInterface) { super(context); }

        renderDisplay(): string {
            let t = "";
            const s = new AccountActivitiesService(this.context);
            this.context.row = s.getRecord(this.context.params.activity_id);
            t = this.getScreenContent("accounts_activities_display");
            return t;
        }

}