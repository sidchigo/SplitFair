package com.splitfair

import android.Manifest
import android.content.pm.PackageManager
import android.database.Cursor
import android.provider.ContactsContract
import androidx.core.app.ActivityCompat
import com.facebook.react.bridge.*
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = ContactsModule.NAME)
class ContactsModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    companion object {
        const val NAME = "ContactsModule"
    }

    override fun getName(): String = NAME

    @ReactMethod
    fun getContacts(promise: Promise) {
        val context = reactApplicationContext
        if (ActivityCompat.checkSelfPermission(context, Manifest.permission.READ_CONTACTS)
            != PackageManager.PERMISSION_GRANTED
        ) {
            promise.reject("NO_PERMISSION", "READ_CONTACTS permission not granted")
            return
        }

        val contacts = Arguments.createArray()
        val cursor: Cursor? = context.contentResolver.query(
            ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
            arrayOf(
                ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME,
                ContactsContract.CommonDataKinds.Phone.NUMBER,
                ContactsContract.CommonDataKinds.Phone.PHOTO_URI
            ),
            null, null, null
        )

        cursor?.use {
            val nameIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)
            val numberIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)
            val photoIndex = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.PHOTO_URI)

            while (it.moveToNext()) {
                val contact = Arguments.createMap()
                contact.putString("name", it.getString(nameIndex))
                contact.putString("number", it.getString(numberIndex))

                val photoUri = it.getString(photoIndex)
                contact.putString("photo", photoUri ?: "") // Empty string if null

                contacts.pushMap(contact)
            }
        }

        promise.resolve(contacts)
    }
}
