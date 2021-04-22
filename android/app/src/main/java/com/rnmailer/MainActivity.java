package com.rnmailer;

import android.content.SharedPreferences;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.rnmailer.constants.ActivityStatus;

public class MainActivity extends ReactActivity {
    public static String MAIN_STATUS_KEY = "MAIN_STATUS_KEY";
    public static String STATUS = "STATUS";

    private SharedPreferences sp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        sp = getSharedPreferences(MAIN_STATUS_KEY, 0);
        sp.edit().putString(STATUS, ActivityStatus.Front.name()).apply();
    }

    @Override
    protected void onPause() {
        super.onPause();
        sp.edit().putString(STATUS, ActivityStatus.Background.name()).apply();
    }

    @Override
    protected void onResume() {
        super.onResume();
        sp.edit().putString(STATUS, ActivityStatus.Front.name()).apply();
    }

    @Override
    protected void onDestroy() {
        sp.edit().putString(STATUS, ActivityStatus.ShutDown.name()).apply();
        super.onDestroy();
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RNMailer";
    }
}
