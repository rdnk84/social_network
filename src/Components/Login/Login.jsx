import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "./../Common/FormsControls/FormsControls.module.css"

const maxLength10 = maxLengthCreator(30)
const LoginForm = (props) => {
    //в пропсы сюда приходит благодаря контейнерной компоненте, обернутой в reduxForm много разных св-в,
    //ключевое из них это handleSubmit
    return (
        <form onSubmit={props.handleSubmit}>
            {/*//в handleSubmit происходит следующее: e.preventDefault, собираются все данные с формы и упаковываются в объект*/}
            {/*//и вызывается метод onSubmit, который отправляет эти данные и меняет State        */}
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required, maxLength10]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required, maxLength10]} component={Input}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
           {props.error ? <div className={styles.formSummaryError}>ERROR</div> : ""}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
//тк форм оч.много,и чтобы библиотека reduxForm не путалась, для каждой формы создается уникальное имя

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        //login здесь- это не сам thunkCreator в authReducer, а просто благодаря connect это некий колбэк, кот.диспатчит вызов
        //этого loginThunkCreator и передает из своих параметров пришедшие данные
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
//можно не ставить return, тогда нужно поставить()

export default connect(mapStateToProps, {login})(Login)
// export default Login;