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
#############################################################################

init() 
{

	echo "Enter the project name?" 
	read PROJECT_NAME

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
		react-native init $PROJECT_NAME

		cd $PROJECT_NAME

		NEW_FOLDER=$(pwd)

		######
		# Instaling yarn's depedencies
		
		yarn add eslint -D
		yarn eslint --init
		yarn add babel-eslint eslint-plugin-react-native -D
		yarn add babel-plugin-root-import -D
		yarn add eslint-import-resolver-babel-plugin-root-import -D
		yarn add reactotron-react-native
		yarn add react-devtools -D
		yarn add prop-types
		yarn add react-native-status-bar-height
		yarn add react-native-vector-icons
		react-native link react-native-vector-icons
		yarn add react-navigation react-native-gesture-handler
		react-native link react-native-gesture-handler
		yarn add axios

		######
		# Copying files

		rm App.js
		cd ../
		cp -R $GIT_FOLDER/ $NEW_FOLDER/
		rm $NEW_FOLDER/install.*
		
		######
		# Run the project
		cd $NEW_FOLDER
		
		build;

	fi

}

build() {
	echo 'Build app... '
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
