//
//  MathAlarmIntents.swift
//  MathAlarmIntents
//
//  Created by Matthew Lundeen on 12/1/25.
//

import AppIntents
import UIKit

@available(iOS 18.0, *)

struct StartMathProblemIntent: AppIntent {
    static var title: LocalizedStringResource = "Start Math Problem"
    static var openAppWhenRun: Bool = true // Run this IN the app process

    @MainActor
    func perform() async throws -> some IntentResult {
        // 1. The app is already open/opening because of the flag above.
        // 2. We use the URL simply to tell React Native WHICH screen to show.
        //    Ensure "mathalarm" is registered in your Info.plist URL Types!
        if let url = URL(string: "mathalarm://startProblem") {
            await UIApplication.shared.open(url)
        }
        return .result()
    }
}
