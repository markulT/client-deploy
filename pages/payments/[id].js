import {useDispatch, useSelector} from "react-redux";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {createSubThunk, getFullProfile, getProfile} from "../../storage/reducers/authReducer";
import {useEffect} from "react";
import Router, {useRouter} from "next/router";

export default function PaymentsPage() {

    const user = useSelector(state=> state.authReducer)
    const paymentData = useSelector(state=>state.payReducer)
    const dispatch = useDispatch()
    const router = useRouter()
    const tariffId = router.query.id
    let script

    const createSub = async (password, tariff, orderId, acqId,paymentData) => {
        await dispatch(createSubThunk({
            login:user.login,
            password:password,
            fullName:user.fullName,
            tariff:tariff,
            orderId:orderId,
            acqId:acqId,
            paymentData:paymentData
        }))
    }

    const subList = {
        standartTV:{
            data:'eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiI1IiwiY3VycmVuY3kiOiJVU0QiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6Imk5ODY0NTM3NTgzMSIsImxhbmd1YWdlIjoidWsiLCJzdWJzY3JpYmUiOjEsInN1YnNjcmliZV9kYXRlX3N0YXJ0Ijoibm93Iiwic3Vic2NyaWJlX3BlcmlvZGljaXR5IjoibW9udGgifQ==',
            signature:'vUjvv2g9iocvj4jN1x4Evn+6Jvg=',
        },
        premiumTV:{
            data: 'eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiIxMCIsImN1cnJlbmN5IjoiVVNEIiwiZGVzY3JpcHRpb24iOiLQnNGW0Lkg0YLQvtCy0LDRgCIsInB1YmxpY19rZXkiOiJpOTg2NDUzNzU4MzEiLCJsYW5ndWFnZSI6InVrIiwic3Vic2NyaWJlIjoxLCJzdWJzY3JpYmVfZGF0ZV9zdGFydCI6Im5vdyIsInN1YnNjcmliZV9wZXJpb2RpY2l0eSI6Im1vbnRoIn0=',
            signature:'9g6vZ5bprRaqF1zWHbXv+H0/46Q='
        },
        standartMobile:{
            data:'eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiIxNSIsImN1cnJlbmN5IjoiVVNEIiwiZGVzY3JpcHRpb24iOiLQn9C+0LTQv9C40YHQutCwIE1vYmlsZSBNYXhpbXVtIiwicHVibGljX2tleSI6InNhbmRib3hfaTE1NTk3MDAyNTI3IiwibGFuZ3VhZ2UiOiJydSIsInN1YnNjcmliZSI6MSwic3Vic2NyaWJlX2RhdGVfc3RhcnQiOiJub3ciLCJzdWJzY3JpYmVfcGVyaW9kaWNpdHkiOiJtb250aCJ9',
            signature: 'KKoZbXoq/hrPb23KnyPr4+a/TRw='
        },
        // minimumTv: {
        //     data:'eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiIxIiwiY3VycmVuY3kiOiJVU0QiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6Imk5ODY0NTM3NTgzMSIsImxhbmd1YWdlIjoidWsiLCJzdWJzY3JpYmUiOjEsInN1YnNjcmliZV9kYXRlX3N0YXJ0Ijoibm93Iiwic3Vic2NyaWJlX3BlcmlvZGljaXR5IjoibW9udGgifQ==',
        //     signature:'iVShQQn+aHGJ4Qxb7YpoRlG+MVI='
        // }
        minimumTv: {
            data:'eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiIxIiwiY3VycmVuY3kiOiJVU0QiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6InNhbmRib3hfaTE1NTk3MDAyNTI3IiwibGFuZ3VhZ2UiOiJ1ayIsInN1YnNjcmliZSI6MSwic3Vic2NyaWJlX2RhdGVfc3RhcnQiOiJub3ciLCJzdWJzY3JpYmVfcGVyaW9kaWNpdHkiOiJtb250aCJ9',
            signature:'YRWOsmbxTxaA5sFMny258Zoc9u4='
        }
    }
    const liqpayDataList = {
        'standart':subList.standartTV,
        'premium':subList.premiumTV,
        'mobile':subList.standartMobile,
        'minimum':subList.minimumTv
    }

    useEffect(()=>{
        if(!paymentData.password || !paymentData.isPassCorrect) {
            router.push('/')
        }
    },[])

    useEffectOnce(()=>{
        if (!!document) {
            window.LiqPayCheckoutCallback = function() {
                LiqPayCheckout.init({
                    data: liqpayDataList[tariffId].data,
                    signature: liqpayDataList[tariffId].signature,
                    embedTo: "#liqpay_checkout",
                    mode: "embed" // embed || popup,
                }).on("liqpay.callback", async function(data){
                    if(data.status == "subscribed") {
                        await createSub(paymentData.password, tariffId, data.order_id, data.acq_id, data)
                        await dispatch(getProfile(false))
                        await dispatch(getFullProfile())
                    }
                }).on("liqpay.ready", function(data){
                    // ready
                }).on("liqpay.close", function(data){
                    // close
                });
            };
            script = document.createElement('script');

            script.src = "//static.liqpay.ua/libjs/checkout.js";
            script.async = true;

            document.body.appendChild(script);
        }
        // return () => {
        //     document.body.removeChild(script);
        // }
    })
    return(
        <div>
            <div id='liqpay_checkout'></div>
        </div>
    )
}

