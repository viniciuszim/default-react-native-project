#!/bin/bash
# Script to create a new React Native project with basic configurations
# 
# Author: Vinicius Miguel
# Date: 19/12/2018

#############################################################################
BASE_FOLDER=
GIT_FOLDER=$(pwd)
NEW_FOLDER=
PROJECT_NAME=
PACKAGE=
#############################################################################

init() 
{

	echo "Enter the project name? (please, don't use special characters)" 
	read PROJECT_NAME

	echo "Enter the package OR just press Enter... Ex: com.organization.project.app" 
	read PACKAGE

	if [ -z $PROJECT_NAME ] ; then
		echo "Project name is mandatory!"
		init;
	else

		clear

		###### 
		# Saving the base folders

		cd ../
		BASE_FOLDER=$(pwd)

		#####################################################################

		######
		# Create the react-native projetc
		#if [ -z $PACKAGE ] ; then
		#	react-native init $PROJECT_NAME
		#else
			react-native init $PROJECT_NAME --package=$PACKAGE
		#fi

		cd $PROJECT_NAME

		NEW_FOLDER=$(pwd)

		######
		# Instaling yarn's depedencies
		yarn add eslint -D
		echo "ESLINT default answers"
		echo "? How would you like to use ESLint? -> To check syntax, find problems, and enforce code style"
		echo "? What type of modules does your project use? -> JavaScript modules (import/export)"
		echo "? Which framework does your project use? -> React"
		echo "? Where does your code run? -> Node"
		echo "? How would you like to define a style for your project? -> Use a popular style guide"
		echo "? Which style guide do you want to follow? -> Airbnb"
		echo "? What format do you want your config file to be in? -> JSON"
		yarn eslint --init
		yarn add babel-eslint eslint-plugin-react-native -D
		yarn add babel-plugin-root-import -D
		yarn add eslint-import-resolver-babel-plugin-root-import -D
		yarn add reactotron-react-native
		yarn add react-devtools -D
		yarn add prop-types
		yarn add color
		yarn add moment
		yarn add currency-formatter
		yarn add react-native-remote-svg
		yarn add react-native-icon-badge
		yarn add react-native-status-bar-height
		yarn add react-native-vector-icons
		react-native link react-native-vector-icons
		yarn add react-navigation
		yarn add react-native-gesture-handler
		react-native link react-native-gesture-handler
		yarn add axios
		yarn add redux
		yarn add redux-saga
		yarn add react-redux
		yarn add reactotron-redux
		yarn add reactotron-redux-saga
		yarn add redux-offline-queue
		yarn add native-base
		rm -f package-lock.json
		yarn add react-native-firebase
		react-native link react-native-firebase
		#yarn add react-geocode
		#yarn add geolib
		#yarn add react-native-maps
		#react-native link react-native-maps
		
		######
		# Copying files

		rm App.js
		cd ../
		cp -R $GIT_FOLDER/ $NEW_FOLDER/
		rm $NEW_FOLDER/install.*
		git remote rm origin
		# TO CHANGE LATER
		# git remote add origin https://github.com/user/repo.git
		
		######
		# Install POD
		
		podinstall;

		######
		# Run the project

		build;

	fi

}

podinstall() {
	echo 'Installing pod... '

	cd $NEW_FOLDER

	mv Podfile ios/ 

	cd $NEW_FOLDER/ios

	# OR nano Podfile
	subl Podfile

	echo "Did you edited the Podfile? (y/n)" 
	read POD_EDITED

	if [ $POD_EDITED = "y" -o $POD_EDITED = "Y" ] ; then

		pod update

		pod install
	fi
}

build() {

	echo 'Build app... '

	cd $NEW_FOLDER

	# TODO: OPEN A NEW TERMINAL AND RUN
	# react-native start --reset-cache

	options=("iOS" "Android" "Quit")
	select opt in "${options[@]}"
	do
	    case $opt in
	        "iOS")
	            echo "building IOS app..." 
				react-native run-ios
	            break
	            ;;
	        "Android")
				echo "building ANDROID app..." 
				react-native run-android
	            ;;
	        "Quit")
	            break
	            ;;
	        *) echo "invalid option $REPLY";;
	    esac
	done
}

clear
init;

echo " "
echo " "
