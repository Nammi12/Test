
namespace ProductPricing.webservices.models {
    export interface BaseRequest {
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface BaseRequestVm {
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface BaseResponseVm {
        status: string;
        statusDescription: string;
    }
    export interface BooleanValueVm {
        value: boolean;
        partyRoleIdentifier: number;
        fileDataID: number;
        name: string;
    }
    export interface ConversationLog {
        partyRoleIdentifier: number;
        fileDataID: number;
        conversationTime: Date;
        talkedTo: string;
        followUpFlag: number;
        notes: string;
        alertFlag: number;
        alertUserRoles: number;
        followUpDate: string;
        loggedInUserName: string;
    }
    export interface ConversationLogPostRequestVm {
        conversationLog: ConversationLog;
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface ConversationLogRequestVm {
        recordsToFetch: number;
        currentPage: number;
        sortCriteria: SortCriteriaVm;
        listOfSearchCriteria: ListOfSearchCriteriaVm[];
        userId: string;
        loanId: string;
        channel: string;
        fileDataId: string;
        organizationId: string;
    }
    export interface ConversationLogResponseVm {
        conversationLogs: ConversationLogVm[];
        totalRecordsCount: number;
        status: string;
        statusDescription: string;
    }
    export interface ConversationLogVm {
        partyRoleIdentifier: number;
        fileDataID: number;
        conversationTime: Date;
        talkedTo: string;
        followUpFlag: number;
        notes: string;
        alertFlag: number;
        alertUserRoles: number;
        followUpDate: string;
        loggedInUserName: string;
        length: number;
        expandLabel: string;
        toggleFlag: boolean;
    }
    export interface CountyVm {
        countyCode: string;
        stateAbbr: string;
        countyName: string;
    }
    export interface DateValueVm {
        value: string;
        partyRoleIdentifier: number;
        fileDataID: number;
        name: string;
    }
    export interface DecimalValueVm {
        value: number;
        partyRoleIdentifier: number;
        fileDataID: number;
        name: string;
    }
    export interface ExtendedValueVm {
        partyRoleIdentifier: number;
        textValues: TextValueVm[];
        decimalValues: DecimalValueVm[];
        dateValues: DateValueVm[];
        booleanValues: BooleanValueVm[];
    }
    export interface ExtensionVm {
        fileDataId: number;
        baseRequest: BaseRequestVm;
        extensionDays: number;
        extendedValue: ExtendedValueVm;
    }
    export interface ListOfSearchCriteriaVm {
        criteriaName: string;
        criteriaType: string;
        criteriaValue: string;
    }
    export interface LockConfirmationInfoRequest {
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface LockConfirmationInfoVm {
        occupancyType: string;
        loanPurpose: string;
        loanProgramCode: string;
        loanProgramName: string;
        mortgageType: string;
        loanProductType: string;
        buyDowns: string;
        isJumbo: string;
        term: number;
        intRate: number;
        baseLoan: number;
        appraisedValue: number;
        appraisedValueStatusOV: string;
        ltv: number;
        cltv: number;
        hcltv: number;
        miMethod: string;
        mipffPerc: number;
        loanWith: number;
        miMoPremPerc: number;
        miMoPremPerc2: number;
        waiveEscrow: string;
        firstTimeHomeBuyer: string;
        estimatedCreditScore: number;
        borrowerFullName: string;
        coBorrowerFullName: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        county: string;
        propertyType: string;
        noUnits: number;
        rateSheetID: string;
        ppeTimePriced: Date;
        buyPricedInvestor: string;
        ppePricedProductName: string;
        buyPriceBase: number;
        buySRP: number;
        lockStartDate: Date;
        lockDays: number;
        lockExtension1Days: number;
        lockExtension2Days: number;
        lockExtension3Days: number;
        lineH: number;
        lockExpirationDate: Date;
        lockFloating: boolean;
        lockCanceledDate: Date;
        buyCommitmentNo: string;
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface LockHistoryVm {
        processedTime: Date;
        lockRequestType: string;
        lockRequestStatus: string;
        lockRequestTime: Date;
        lockStartDate: Date;
        lockExpirationDate: Date;
        lockDays: number;
        lockExtension1Days: number;
        lockExtension2Days: number;
        lockExtension3Days: number;
        intRate: number;
        armMargin: number;
        baseLoan: number;
        loanAmount: number;
        pricedInvestor: string;
        loanProgramCode: string;
        loanProgramName: string;
        mortgageType: string;
        amortizationType: string;
        term: number;
        creditScore: number;
        ltV: number;
        clTv: number;
        hclTv: number;
        secondRatio: number;
        waiveEscrow: string;
        occupancyType: string;
        loanPurpose: string;
        refiType: string;
        buyPriceBase: number;
        buySrP: number;
        buyPriceAdjustments: number;
        buyPriceNet: number;
        propertyType: string;
        subPropStreet: string;
        subPropCity: string;
        subPropState: string;
        subPropZip: string;
        subPropCounty: string;
        subPropNoUnits: number;
        subPropStories: number;
        borFirstName: string;
        borLastName: string;
        coBorFirstName: string;
        coBorLastName: string;
        purPrice: number;
        appraisedValue: number;
        subFiBaseLoan: number;
        firstTimeHomeBuyer: string;
        selfEmployed: string;
        cashFromToBorrower: number;
        refiCashOutAmount: number;
        monthsInReserve: number;
        hasNonOccCoBorrower: number;
        notes: string;
        userName: string;
    }
    export interface OriginatorLockInfoRequest {
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface OriginatorLockInfoVm {
        lockDays: number;
        lockExtension1Days: number;
        lockExtension2Days: number;
        lockExtension3Days: number;
        lockStartDate: Date;
        unextendedLockExpDate: Date;
        lockExpirationDate: Date;
        lockFloating: boolean;
        buyCommitmentNo: string;
        lockCanceledDate: Date;
        regulatoryLockDateOV: Date;
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface PostLockDetailVm {
        requestedInterestRate: number;
        loanProgram: string;
        rollDown: string;
        lockDays: string;
        instructionForSecDesk: string;
    }
    export interface PostLockObUrlRequestVm {
        profileChangeVm: ProfileChangeVM;
        baseRequestVm: BaseRequestVm;
    }
    export interface PostLockRequestVm {
        relockExpiredLock: boolean;
        programChange: boolean;
        rollDown: boolean;
        cancelLock: boolean;
    }
    export interface PostLockUpdateRequestVm {
        fileDataId: number;
        postLockRequest: PostLockRequestVm;
        postLockDetail: PostLockDetailVm;
        extendedValue: ExtendedValueVm;
    }
    export interface PriceLockHistoryRequest {
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface PriceLockHistoryVm {
        bspsOrigLockedAmount: number;
        originalLockDate: Date;
        lockHistories: LockHistoryVm[];
        currentLockHistory: LockHistoryVm;
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface PriceLockInfoRequest {
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface PriceLockInfoResponseVm {
        transactionIdentifiers: TransactionIdentifiers;
        encryptedUrl: string;
        status: string;
        statusDescription: string;
    }
    export interface PriceLockInfoVm {
        obUserName: string;
        optimalBlueLoanIdentifier: string;
        baseLoan: number;
        loanWith: number;
        subFiBaseLoan: number;
        purPrice: number;
        appraisedValue: number;
        loanPurpose: number;
        refinanceCashOutAmount: number;
        ltv: number;
        cltv: number;
        hcltv: number;
        waiveEscrow: number;
        borrowerFirstName: string;
        borrowerLastName: string;
        fileCreditScore: number;
        citizenResidencyType: number;
        firstTimeHomeBuyer: number;
        occupyAsPrimaryRes: number;
        occupancyType: number;
        propertyType: number;
        noUnits: number;
        street: string;
        city: string;
        state: string;
        county: string;
        zip: string;
        mortgageType: number;
        term: number;
        amortizationType: number;
        interestOnlyPeriod: number;
        lockDays: number;
        buyDowns: number;
        helocLineAmount: number;
        helocDrawnAmount: number;
        searchForFirst: boolean;
        priceEstimatedValue: number;
        sixFinancedProperties: number;
        mixedUseProperties: number;
        nonOccupantCoBorrower: string;
        incomeDocumentation: string;
        assetDocumentation: string;
        employmentDocumentation: string;
        confirming: boolean;
        nonConfirming: boolean;
        fha: boolean;
        va: boolean;
        usda: boolean;
        loanTerm30: boolean;
        loanTerm25: boolean;
        loanTerm20: boolean;
        loanTerm15: boolean;
        loanTerm10: boolean;
        fixed: boolean;
        arm: boolean;
        armTerm3: boolean;
        armTerm5: boolean;
        armTerm7: boolean;
        armTerm10: boolean;
        desiredPrice: number;
        desiredRate: number;
        desiredLockPeriod: number;
        noOfStories: number;
        borrowerPaysMi: number;
        fhaCaseAssigned: number;
        loanStatus: string;
        optimalBlueRequestType: number;
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface ProfileChangeData {
        partyRoleIdentifier: number;
        baseLoan: number;
        loanWith: number;
        subFiBaseLoan: number;
        purPrice: number;
        loanPurpose: number;
        refinanceCashOutAmount: number;
        waiveEscrow: number;
        borrowerFirstName: string;
        borrowerLastName: string;
        fileCreditScore: number;
        citizenResidencyType: number;
        firstTimeHomeBuyer: number;
        occupyAsPrimaryRes: number;
        selfEmployed: boolean;
        occupancyType: number;
        propertyType: number;
        noUnits: number;
        stories: number;
        state: string;
        county: string;
        zip: string;
        firstLienSearchCriteria: string;
        loanType: number;
        loanTerm: number;
        amortizationType: number;
        armFixedTerms: number;
        desiredPrice: number;
        desiredRate: number;
        desiredLockPeriod: number;
        buyDowns: number;
        borrowerPaysMi: number;
        fhaCase: number;
        username: string;
        partnerLoanIdentifier: number;
        partnerLoanIdentifierSourceName: string;
        externalLoanStatusName: string;
        externalLoanStatusUri: string;
        returnUrl: string;
        lenderLoanIdentifier: number;
        partnerTransactionIdentifier: number;
        assetDocumentation: string;
        helocDrawnAmount: number;
        appraisalAmount: number;
        searchforFirst: number;
        optimalBlueLoanIdentifier: string;
        ppeUserName: string;
    }
    export interface ProfileChangeDetailsVM {
        partyRoleIdentifier: number;
        profileChange: ProfileChangeData;
    }
    export interface ProfileChangeOBResponseVm {
        encryptedUrl: string;
        status: string;
        statusDescription: string;
    }
    export interface ProfileChangeVM {
        profileChangeDetails: ProfileChangeDetailsVM;
        status: string;
        statusDescription: string;
    }
    export interface RateSheetBranch {
        id: string;
        name: string;
    }
    export interface RateSheets {
        name: string;
        range: string;
        fileType: string;
        creationTime: Date;
        modifiedTime: Date;
        zoneOrBranchName: string;
        branchId: string;
    }
    export interface RateSheetViewModel {
        fromDate: Date;
        toDate: Date;
        pageNumber: number;
        pageSize: number;
        numberOfRecords: number;
        rateSheets: RateSheets[];
    }
    export interface RateSheetViewModelRequest {
        range: string;
        portalName: string;
        zoneOrBranchNames: string;
        branchId: string;
        fileType: string;
        pageNumber: number;
        pageSize: number;
        numberOfRecords: number;
        fromDate: Date;
        toDate: Date;
    }
    export interface ScenarioPricingRequestVm {
        scenarioName: string;
        borrowerLastName: string;
        createdDate: Date;
        pageSize: number;
        pageNo: number;
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface ScenarioPricingResponseVm {
        status: string;
        statusDescription: string;
    }
    export interface ScenarioPricingVm {
        obUserName: string;
        optimalBlueLoanIdentifier: string;
        scenarioPricingId: number;
        scenarioName: string;
        baseLoanAmount: number;
        heLoanAmount: number;
        helocLienAmount: number;
        helocDrawnAmount: number;
        sixFinancedProperties: number;
        mixedUseProperties: number;
        searchFirst: boolean;
        priceEstimatedValue: number;
        appraisalAmount: number;
        loanPurpose: number;
        cashOutAmount: number;
        ltv: number;
        cltv: number;
        hcltv: number;
        waiveEscrow: number;
        borrowerFirstName: string;
        borrowerLastName: string;
        representativeFico: number;
        citizenship: number;
        firstTimeHomeBuyer: number;
        nonOccupantCoBorrower: number;
        incomeDoc: string;
        assetDoc: string;
        employmentDoc: string;
        occupancyType: number;
        propertyType: number;
        noOfUnits: number;
        noOfStories: number;
        state: string;
        county: string;
        zip: string;
        confirming: boolean;
        nonConfirming: boolean;
        fha: boolean;
        va: boolean;
        usda: boolean;
        loanTerm30: boolean;
        loanTerm25: boolean;
        loanTerm20: boolean;
        loanTerm15: boolean;
        loanTerm10: boolean;
        fixed: boolean;
        arm: boolean;
        armTerm3: boolean;
        armTerm5: boolean;
        armTerm7: boolean;
        armTerm10: boolean;
        desiredPrice: number;
        desiredRate: number;
        desiredLockPeriod: number;
        buyDown: number;
        borrowerPaysMi: number;
        fhaCaseAssigned: number;
        userName: string;
        partnerLoanIdentifier: string;
        partnerLoanIdentifierSourceName: string;
        externalLoanStatusName: string;
        externalLoanStatusUri: string;
        returnUrl: string;
        lenderLoanIdentifier: string;
        createdDate: Date;
        modifiedDate: Date;
        createdBy: string;
        modifiedBy: string;
        rowNumber: number;
        totalRows: number;
        recordStatus: number;
        userId: number;
        loanId: number;
        channel: number;
        fileDataId: number;
        fileName: string;
        organizationId: number;
    }
    export interface SortCriteriaVm {
        sortColumn: string;
        sortOrder: string;
    }
    export interface StateVm {
        stateAbbr: string;
        stateName: string;
        stateId: string;
    }
    export interface TextValueVm {
        value: string;
        partyRoleIdentifier: number;
        fileDataID: number;
        name: string;
    }
    export interface TransactionIdentifiers {
        optimalBlueTransactionIdentifier: string;
        partnerTransactionIdentifier: string;
    }
    export interface UserLoginInfo {
        userId: number;
        firstName: string;
        lastName: string;
        userOrgProfileID: number;
        roleID: number;
        roleName: string;
        organizationID: number;
        orgName: string;
        changePasswordAtLogon: boolean;
    }
    export type Initializer<TModel> = (model: TModel) => void;
    export class ModelFactory {
        public static createEmptyConversationLogResponseVm(initializer?: Initializer<ConversationLogResponseVm>): ConversationLogResponseVm {
            let model: ConversationLogResponseVm =  {
                conversationLogs: [],
                totalRecordsCount: undefined,
                status: '',
                statusDescription: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyConversationLogVm(initializer?: Initializer<ConversationLogVm>): ConversationLogVm {
            let model: ConversationLogVm =  {
                partyRoleIdentifier: undefined,
                fileDataID: undefined,
                conversationTime: undefined,
                talkedTo: '',
                followUpFlag: undefined,
                notes: '',
                alertFlag: undefined,
                alertUserRoles: undefined,
                followUpDate: '',
                loggedInUserName: '',
                length: undefined,
                expandLabel: '',
                toggleFlag: false,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyConversationLogRequestVm(initializer?: Initializer<ConversationLogRequestVm>): ConversationLogRequestVm {
            let model: ConversationLogRequestVm =  {
                recordsToFetch: undefined,
                currentPage: undefined,
                sortCriteria: ModelFactory.createEmptySortCriteriaVm(),
                listOfSearchCriteria: [],
                userId: '',
                loanId: '',
                channel: '',
                fileDataId: '',
                organizationId: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptySortCriteriaVm(initializer?: Initializer<SortCriteriaVm>): SortCriteriaVm {
            let model: SortCriteriaVm =  {
                sortColumn: '',
                sortOrder: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyListOfSearchCriteriaVm(initializer?: Initializer<ListOfSearchCriteriaVm>): ListOfSearchCriteriaVm {
            let model: ListOfSearchCriteriaVm =  {
                criteriaName: '',
                criteriaType: '',
                criteriaValue: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyBaseResponseVm(initializer?: Initializer<BaseResponseVm>): BaseResponseVm {
            let model: BaseResponseVm =  {
                status: '',
                statusDescription: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyConversationLogPostRequestVm(initializer?: Initializer<ConversationLogPostRequestVm>): ConversationLogPostRequestVm {
            let model: ConversationLogPostRequestVm =  {
                conversationLog: ModelFactory.createEmptyConversationLog(),
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyConversationLog(initializer?: Initializer<ConversationLog>): ConversationLog {
            let model: ConversationLog =  {
                partyRoleIdentifier: undefined,
                fileDataID: undefined,
                conversationTime: undefined,
                talkedTo: '',
                followUpFlag: undefined,
                notes: '',
                alertFlag: undefined,
                alertUserRoles: undefined,
                followUpDate: '',
                loggedInUserName: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyProfileChangeOBResponseVm(initializer?: Initializer<ProfileChangeOBResponseVm>): ProfileChangeOBResponseVm {
            let model: ProfileChangeOBResponseVm =  {
                encryptedUrl: '',
                status: '',
                statusDescription: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyExtensionVm(initializer?: Initializer<ExtensionVm>): ExtensionVm {
            let model: ExtensionVm =  {
                fileDataId: undefined,
                baseRequest: ModelFactory.createEmptyBaseRequestVm(),
                extensionDays: undefined,
                extendedValue: ModelFactory.createEmptyExtendedValueVm(),
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyBaseRequestVm(initializer?: Initializer<BaseRequestVm>): BaseRequestVm {
            let model: BaseRequestVm =  {
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyExtendedValueVm(initializer?: Initializer<ExtendedValueVm>): ExtendedValueVm {
            let model: ExtendedValueVm =  {
                partyRoleIdentifier: undefined,
                textValues: [],
                decimalValues: [],
                dateValues: [],
                booleanValues: [],
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyTextValueVm(initializer?: Initializer<TextValueVm>): TextValueVm {
            let model: TextValueVm =  {
                value: '',
                partyRoleIdentifier: undefined,
                fileDataID: undefined,
                name: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyDecimalValueVm(initializer?: Initializer<DecimalValueVm>): DecimalValueVm {
            let model: DecimalValueVm =  {
                value: undefined,
                partyRoleIdentifier: undefined,
                fileDataID: undefined,
                name: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyDateValueVm(initializer?: Initializer<DateValueVm>): DateValueVm {
            let model: DateValueVm =  {
                value: '',
                partyRoleIdentifier: undefined,
                fileDataID: undefined,
                name: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyBooleanValueVm(initializer?: Initializer<BooleanValueVm>): BooleanValueVm {
            let model: BooleanValueVm =  {
                value: false,
                partyRoleIdentifier: undefined,
                fileDataID: undefined,
                name: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPostLockUpdateRequestVm(initializer?: Initializer<PostLockUpdateRequestVm>): PostLockUpdateRequestVm {
            let model: PostLockUpdateRequestVm =  {
                fileDataId: undefined,
                postLockRequest: ModelFactory.createEmptyPostLockRequestVm(),
                postLockDetail: ModelFactory.createEmptyPostLockDetailVm(),
                extendedValue: ModelFactory.createEmptyExtendedValueVm(),
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPostLockRequestVm(initializer?: Initializer<PostLockRequestVm>): PostLockRequestVm {
            let model: PostLockRequestVm =  {
                relockExpiredLock: false,
                programChange: false,
                rollDown: false,
                cancelLock: false,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPostLockDetailVm(initializer?: Initializer<PostLockDetailVm>): PostLockDetailVm {
            let model: PostLockDetailVm =  {
                requestedInterestRate: undefined,
                loanProgram: '',
                rollDown: '',
                lockDays: '',
                instructionForSecDesk: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyBaseRequest(initializer?: Initializer<BaseRequest>): BaseRequest {
            let model: BaseRequest =  {
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyOriginatorLockInfoVm(initializer?: Initializer<OriginatorLockInfoVm>): OriginatorLockInfoVm {
            let model: OriginatorLockInfoVm =  {
                lockDays: undefined,
                lockExtension1Days: undefined,
                lockExtension2Days: undefined,
                lockExtension3Days: undefined,
                lockStartDate: undefined,
                unextendedLockExpDate: undefined,
                lockExpirationDate: undefined,
                lockFloating: false,
                buyCommitmentNo: '',
                lockCanceledDate: undefined,
                regulatoryLockDateOV: undefined,
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyOriginatorLockInfoRequest(initializer?: Initializer<OriginatorLockInfoRequest>): OriginatorLockInfoRequest {
            let model: OriginatorLockInfoRequest =  {
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyLockConfirmationInfoVm(initializer?: Initializer<LockConfirmationInfoVm>): LockConfirmationInfoVm {
            let model: LockConfirmationInfoVm =  {
                occupancyType: '',
                loanPurpose: '',
                loanProgramCode: '',
                loanProgramName: '',
                mortgageType: '',
                loanProductType: '',
                buyDowns: '',
                isJumbo: '',
                term: undefined,
                intRate: undefined,
                baseLoan: undefined,
                appraisedValue: undefined,
                appraisedValueStatusOV: '',
                ltv: undefined,
                cltv: undefined,
                hcltv: undefined,
                miMethod: '',
                mipffPerc: undefined,
                loanWith: undefined,
                miMoPremPerc: undefined,
                miMoPremPerc2: undefined,
                waiveEscrow: '',
                firstTimeHomeBuyer: '',
                estimatedCreditScore: undefined,
                borrowerFullName: '',
                coBorrowerFullName: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                county: '',
                propertyType: '',
                noUnits: undefined,
                rateSheetID: '',
                ppeTimePriced: undefined,
                buyPricedInvestor: '',
                ppePricedProductName: '',
                buyPriceBase: undefined,
                buySRP: undefined,
                lockStartDate: undefined,
                lockDays: undefined,
                lockExtension1Days: undefined,
                lockExtension2Days: undefined,
                lockExtension3Days: undefined,
                lineH: undefined,
                lockExpirationDate: undefined,
                lockFloating: false,
                lockCanceledDate: undefined,
                buyCommitmentNo: '',
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyLockConfirmationInfoRequest(initializer?: Initializer<LockConfirmationInfoRequest>): LockConfirmationInfoRequest {
            let model: LockConfirmationInfoRequest =  {
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPriceLockInfoVm(initializer?: Initializer<PriceLockInfoVm>): PriceLockInfoVm {
            let model: PriceLockInfoVm =  {
                obUserName: '',
                optimalBlueLoanIdentifier: '',
                baseLoan: undefined,
                loanWith: undefined,
                subFiBaseLoan: undefined,
                purPrice: undefined,
                appraisedValue: undefined,
                loanPurpose: undefined,
                refinanceCashOutAmount: undefined,
                ltv: undefined,
                cltv: undefined,
                hcltv: undefined,
                waiveEscrow: undefined,
                borrowerFirstName: '',
                borrowerLastName: '',
                fileCreditScore: undefined,
                citizenResidencyType: undefined,
                firstTimeHomeBuyer: undefined,
                occupyAsPrimaryRes: undefined,
                occupancyType: undefined,
                propertyType: undefined,
                noUnits: undefined,
                street: '',
                city: '',
                state: '',
                county: '',
                zip: '',
                mortgageType: undefined,
                term: undefined,
                amortizationType: undefined,
                interestOnlyPeriod: undefined,
                lockDays: undefined,
                buyDowns: undefined,
                helocLineAmount: undefined,
                helocDrawnAmount: undefined,
                searchForFirst: false,
                priceEstimatedValue: undefined,
                sixFinancedProperties: undefined,
                mixedUseProperties: undefined,
                nonOccupantCoBorrower: '',
                incomeDocumentation: '',
                assetDocumentation: '',
                employmentDocumentation: '',
                confirming: false,
                nonConfirming: false,
                fha: false,
                va: false,
                usda: false,
                loanTerm30: false,
                loanTerm25: false,
                loanTerm20: false,
                loanTerm15: false,
                loanTerm10: false,
                fixed: false,
                arm: false,
                armTerm3: false,
                armTerm5: false,
                armTerm7: false,
                armTerm10: false,
                desiredPrice: undefined,
                desiredRate: undefined,
                desiredLockPeriod: undefined,
                noOfStories: undefined,
                borrowerPaysMi: undefined,
                fhaCaseAssigned: undefined,
                loanStatus: '',
                optimalBlueRequestType: undefined,
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPriceLockInfoRequest(initializer?: Initializer<PriceLockInfoRequest>): PriceLockInfoRequest {
            let model: PriceLockInfoRequest =  {
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPriceLockHistoryVm(initializer?: Initializer<PriceLockHistoryVm>): PriceLockHistoryVm {
            let model: PriceLockHistoryVm =  {
                bspsOrigLockedAmount: undefined,
                originalLockDate: undefined,
                lockHistories: [],
                currentLockHistory: ModelFactory.createEmptyLockHistoryVm(),
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyLockHistoryVm(initializer?: Initializer<LockHistoryVm>): LockHistoryVm {
            let model: LockHistoryVm =  {
                processedTime: undefined,
                lockRequestType: '',
                lockRequestStatus: '',
                lockRequestTime: undefined,
                lockStartDate: undefined,
                lockExpirationDate: undefined,
                lockDays: undefined,
                lockExtension1Days: undefined,
                lockExtension2Days: undefined,
                lockExtension3Days: undefined,
                intRate: undefined,
                armMargin: undefined,
                baseLoan: undefined,
                loanAmount: undefined,
                pricedInvestor: '',
                loanProgramCode: '',
                loanProgramName: '',
                mortgageType: '',
                amortizationType: '',
                term: undefined,
                creditScore: undefined,
                ltV: undefined,
                clTv: undefined,
                hclTv: undefined,
                secondRatio: undefined,
                waiveEscrow: '',
                occupancyType: '',
                loanPurpose: '',
                refiType: '',
                buyPriceBase: undefined,
                buySrP: undefined,
                buyPriceAdjustments: undefined,
                buyPriceNet: undefined,
                propertyType: '',
                subPropStreet: '',
                subPropCity: '',
                subPropState: '',
                subPropZip: '',
                subPropCounty: '',
                subPropNoUnits: undefined,
                subPropStories: undefined,
                borFirstName: '',
                borLastName: '',
                coBorFirstName: '',
                coBorLastName: '',
                purPrice: undefined,
                appraisedValue: undefined,
                subFiBaseLoan: undefined,
                firstTimeHomeBuyer: '',
                selfEmployed: '',
                cashFromToBorrower: undefined,
                refiCashOutAmount: undefined,
                monthsInReserve: undefined,
                hasNonOccCoBorrower: undefined,
                notes: '',
                userName: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPriceLockHistoryRequest(initializer?: Initializer<PriceLockHistoryRequest>): PriceLockHistoryRequest {
            let model: PriceLockHistoryRequest =  {
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPriceLockInfoResponseVm(initializer?: Initializer<PriceLockInfoResponseVm>): PriceLockInfoResponseVm {
            let model: PriceLockInfoResponseVm =  {
                transactionIdentifiers: ModelFactory.createEmptyTransactionIdentifiers(),
                encryptedUrl: '',
                status: '',
                statusDescription: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyTransactionIdentifiers(initializer?: Initializer<TransactionIdentifiers>): TransactionIdentifiers {
            let model: TransactionIdentifiers =  {
                optimalBlueTransactionIdentifier: '',
                partnerTransactionIdentifier: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyScenarioPricingVm(initializer?: Initializer<ScenarioPricingVm>): ScenarioPricingVm {
            let model: ScenarioPricingVm =  {
                obUserName: '',
                optimalBlueLoanIdentifier: '',
                scenarioPricingId: undefined,
                scenarioName: '',
                baseLoanAmount: undefined,
                heLoanAmount: undefined,
                helocLienAmount: undefined,
                helocDrawnAmount: undefined,
                sixFinancedProperties: undefined,
                mixedUseProperties: undefined,
                searchFirst: false,
                priceEstimatedValue: undefined,
                appraisalAmount: undefined,
                loanPurpose: undefined,
                cashOutAmount: undefined,
                ltv: undefined,
                cltv: undefined,
                hcltv: undefined,
                waiveEscrow: undefined,
                borrowerFirstName: '',
                borrowerLastName: '',
                representativeFico: undefined,
                citizenship: undefined,
                firstTimeHomeBuyer: undefined,
                nonOccupantCoBorrower: undefined,
                incomeDoc: '',
                assetDoc: '',
                employmentDoc: '',
                occupancyType: undefined,
                propertyType: undefined,
                noOfUnits: undefined,
                noOfStories: undefined,
                state: '',
                county: '',
                zip: '',
                confirming: false,
                nonConfirming: false,
                fha: false,
                va: false,
                usda: false,
                loanTerm30: false,
                loanTerm25: false,
                loanTerm20: false,
                loanTerm15: false,
                loanTerm10: false,
                fixed: false,
                arm: false,
                armTerm3: false,
                armTerm5: false,
                armTerm7: false,
                armTerm10: false,
                desiredPrice: undefined,
                desiredRate: undefined,
                desiredLockPeriod: undefined,
                buyDown: undefined,
                borrowerPaysMi: undefined,
                fhaCaseAssigned: undefined,
                userName: '',
                partnerLoanIdentifier: '',
                partnerLoanIdentifierSourceName: '',
                externalLoanStatusName: '',
                externalLoanStatusUri: '',
                returnUrl: '',
                lenderLoanIdentifier: '',
                createdDate: undefined,
                modifiedDate: undefined,
                createdBy: '',
                modifiedBy: '',
                rowNumber: undefined,
                totalRows: undefined,
                recordStatus: undefined,
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyScenarioPricingRequestVm(initializer?: Initializer<ScenarioPricingRequestVm>): ScenarioPricingRequestVm {
            let model: ScenarioPricingRequestVm =  {
                scenarioName: '',
                borrowerLastName: '',
                createdDate: undefined,
                pageSize: undefined,
                pageNo: undefined,
                userId: undefined,
                loanId: undefined,
                channel: undefined,
                fileDataId: undefined,
                fileName: '',
                organizationId: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyScenarioPricingResponseVm(initializer?: Initializer<ScenarioPricingResponseVm>): ScenarioPricingResponseVm {
            let model: ScenarioPricingResponseVm =  {
                status: '',
                statusDescription: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyStateVm(initializer?: Initializer<StateVm>): StateVm {
            let model: StateVm =  {
                stateAbbr: '',
                stateName: '',
                stateId: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyCountyVm(initializer?: Initializer<CountyVm>): CountyVm {
            let model: CountyVm =  {
                countyCode: '',
                stateAbbr: '',
                countyName: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyProfileChangeVM(initializer?: Initializer<ProfileChangeVM>): ProfileChangeVM {
            let model: ProfileChangeVM =  {
                profileChangeDetails: ModelFactory.createEmptyProfileChangeDetailsVM(),
                status: '',
                statusDescription: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyProfileChangeDetailsVM(initializer?: Initializer<ProfileChangeDetailsVM>): ProfileChangeDetailsVM {
            let model: ProfileChangeDetailsVM =  {
                partyRoleIdentifier: undefined,
                profileChange: ModelFactory.createEmptyProfileChangeData(),
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyProfileChangeData(initializer?: Initializer<ProfileChangeData>): ProfileChangeData {
            let model: ProfileChangeData =  {
                partyRoleIdentifier: undefined,
                baseLoan: undefined,
                loanWith: undefined,
                subFiBaseLoan: undefined,
                purPrice: undefined,
                loanPurpose: undefined,
                refinanceCashOutAmount: undefined,
                waiveEscrow: undefined,
                borrowerFirstName: '',
                borrowerLastName: '',
                fileCreditScore: undefined,
                citizenResidencyType: undefined,
                firstTimeHomeBuyer: undefined,
                occupyAsPrimaryRes: undefined,
                selfEmployed: false,
                occupancyType: undefined,
                propertyType: undefined,
                noUnits: undefined,
                stories: undefined,
                state: '',
                county: '',
                zip: '',
                firstLienSearchCriteria: '',
                loanType: undefined,
                loanTerm: undefined,
                amortizationType: undefined,
                armFixedTerms: undefined,
                desiredPrice: undefined,
                desiredRate: undefined,
                desiredLockPeriod: undefined,
                buyDowns: undefined,
                borrowerPaysMi: undefined,
                fhaCase: undefined,
                username: '',
                partnerLoanIdentifier: undefined,
                partnerLoanIdentifierSourceName: '',
                externalLoanStatusName: '',
                externalLoanStatusUri: '',
                returnUrl: '',
                lenderLoanIdentifier: undefined,
                partnerTransactionIdentifier: undefined,
                assetDocumentation: '',
                helocDrawnAmount: undefined,
                appraisalAmount: undefined,
                searchforFirst: undefined,
                optimalBlueLoanIdentifier: '',
                ppeUserName: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyPostLockObUrlRequestVm(initializer?: Initializer<PostLockObUrlRequestVm>): PostLockObUrlRequestVm {
            let model: PostLockObUrlRequestVm =  {
                profileChangeVm: ModelFactory.createEmptyProfileChangeVM(),
                baseRequestVm: ModelFactory.createEmptyBaseRequestVm(),
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyRateSheetViewModel(initializer?: Initializer<RateSheetViewModel>): RateSheetViewModel {
            let model: RateSheetViewModel =  {
                fromDate: undefined,
                toDate: undefined,
                pageNumber: undefined,
                pageSize: undefined,
                numberOfRecords: undefined,
                rateSheets: [],
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyRateSheets(initializer?: Initializer<RateSheets>): RateSheets {
            let model: RateSheets =  {
                name: '',
                range: '',
                fileType: '',
                creationTime: undefined,
                modifiedTime: undefined,
                zoneOrBranchName: '',
                branchId: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyRateSheetViewModelRequest(initializer?: Initializer<RateSheetViewModelRequest>): RateSheetViewModelRequest {
            let model: RateSheetViewModelRequest =  {
                range: '',
                portalName: '',
                zoneOrBranchNames: '',
                branchId: '',
                fileType: '',
                pageNumber: undefined,
                pageSize: undefined,
                numberOfRecords: undefined,
                fromDate: undefined,
                toDate: undefined,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyRateSheetBranch(initializer?: Initializer<RateSheetBranch>): RateSheetBranch {
            let model: RateSheetBranch =  {
                id: '',
                name: '',
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
        public static createEmptyUserLoginInfo(initializer?: Initializer<UserLoginInfo>): UserLoginInfo {
            let model: UserLoginInfo =  {
                userId: undefined,
                firstName: '',
                lastName: '',
                userOrgProfileID: undefined,
                roleID: undefined,
                roleName: '',
                organizationID: undefined,
                orgName: '',
                changePasswordAtLogon: false,
            };
            if (initializer) {
                initializer(model);
            }
            return model;
        }
    }
}
