
export const ERROR_SERVER_REFRESH = {
    type: 'error',
    text1: '서버 에러',
    text2: '잠시 후 이용해 주십시오.',
};

export const ERROR_LOGIN_NOTIFICATION = {
    type: 'simple',
    children: <div>등록된 아이디가 아니에요. 이메일 또는 비밀번호를 확인해주세요.</div>,
};

export const ERROR_NOTIFICATION = msg => ({
    type: 'ok',
    children: <div>{msg}</div>,
});

export const PROMPT_CHANGE_MEDICAL_CARD = (rsvInfo, selectCard) => ({
    type: 'okCancel',
    cancelText: '아니오',
    confirmText: '예',
    children: (
        <>
            <div>
                아니아니리{'\n'} 니리리리
            </div>
        </>
    ),
});


//show,confirm