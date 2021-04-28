package com.rnmailer;

import com.facebook.react.ReactActivity;
import com.rnmailer.helper.DBHelper;

public class SendMailActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "SendMailActivity";
    }

    @Override
    protected void onDestroy() {
        DBHelper.getInstance(this).close();
        super.onDestroy();
    }
}
