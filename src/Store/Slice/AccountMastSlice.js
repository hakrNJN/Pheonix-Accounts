import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    displayName: '',
    gstin: '',
    group: '',
    category: '',
    schedule: '',
    regType: '',
    agent: '',
    address1: '',
    address2: '',
    market: '',
    landMark: '',
    district: '',
    city: '',
    state: '',
    pin: '',
    transport: '',
    deliveryStation: '',
    mobile: '',
    phone: '',
    email: '',
    whatsapp: '',
    sms: '',
    contactPerson: '',
    bankName: '',
    branchName: '',
    branchAddress: '',
    accountName: '',
    accountNumber: '',
    ifsc: '',
    swiftCode: '',
    cstNo: '',
    tin: '',
    pan: '',
    tan: '',
    refby: '',
    tdsDate: '',
    tdsRate: '',
    tdsNature: '',
    dhara: '',
    mudhat: '',
    rateOfInterest: '',
    creditDaysLimit: '',
    creditAmtLimit: ''
};

const accountMasterSlice = createSlice({
    name: 'accountMaster',
    initialState,
    reducers: {
        setAccountMaster(state, action) {
            return { ...state, ...action.payload };
        },
        clearAccountMaster() {
            return initialState;
        },
    },
});

export const { setAccountMaster, clearAccountMaster } = accountMasterSlice.actions;

export default accountMasterSlice.reducer;
