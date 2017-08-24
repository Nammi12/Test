
import wsService = ProductPricing.webservices;
import wsModels = ProductPricing.webservices.models;

   // @Injectable('appComponentService')
    export class appComponentService {


        /* @ngInject */
        constructor() {
            //this.baseRequest = this.storageService.getSession('activeLoanRequest');
        }

         public GetConversationLogDetails(ConversationLogRequestVm: wsModels.ConversationLogRequestVm): wsModels.ConversationLogResponseVm {

            return ;
         }


       public AddNewConversation(ConversationLogPostRequestVm: wsModels.ConversationLogPostRequestVm): wsModels.BaseResponseVm{
           return ;
       }


        public ConversationLogRequestVm = (): wsModels.ConversationLogRequestVm => {
           // var baseRequest=this.storageService.getSession('activeLoanRequest');
            return {
                channel: "",
                currentPage: 0,
                fileDataId: "",
                loanId:"",
                organizationId:"",
                recordsToFetch: 0,
                sortCriteria: this.sortCriteria(),
                userId: "",
                listOfSearchCriteria:[]
            }
        }

        public sortCriteria = (): wsModels.SortCriteriaVm => {
            return {
                sortColumn: "",
                sortOrder: ""
            }
        }

        public ConversationLogResponseVm = (): wsModels.ConversationLogResponseVm => {
            return {
                conversationLogs: this.conversationlogVm(),
                status: "",
                statusDescription: "",
                totalRecordsCount: 0
            }
        }

        public conversationlogVm = (): wsModels.ConversationLogVm[] => {
            return [{

                partyRoleIdentifier: 0,
                fileDataID: 0,
                conversationTime: new Date(),
                talkedTo: "",
                followUpFlag: 0,
                notes: "",
                alertFlag: 0,
                alertUserRoles: 0,
                followUpDate: "",
                loggedInUserName: "",
                length:0,
                expandLabel:"[More]",
                toggleFlag:true
            }]
        }

         public conversationlog = (): wsModels.ConversationLog => {
            return {

                partyRoleIdentifier: 0,
                fileDataID: 0,
                conversationTime: new Date(),
                talkedTo: "",
                followUpFlag: 0,
                notes: "",
                alertFlag: 0,
                alertUserRoles: 0,
                followUpDate: "",
                loggedInUserName: ""
            }
        }


        public ConversationLogPostRequestVm=():wsModels.ConversationLogPostRequestVm=>{
           // var baseRequest=this.storageService.getSession('activeLoanRequest');
            return{

                conversationLog:this.conversationlog(),
                channel: 1,
                fileDataId:12345,
                loanId:23456,
                organizationId:21,
                userId:234,
                fileName:'h28823'
            }
        }

        


        //   public GetMaxDate(): Date {
        //     let todayDate = new Date();
        //     let year: number = todayDate.getFullYear() - 18;
        //     let month: number = todayDate.getMonth() + 1;
        //     let day: number = todayDate.getDate();
        //     let maxdate: Date = new Date(month.toString() + "/" + day.toString() + "/" + year.toString());

        //     return maxdate;
        // }

    }

