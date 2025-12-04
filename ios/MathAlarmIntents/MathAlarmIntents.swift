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
    static var openAppWhenRun: Bool = true

    @MainActor
    func perform() async throws -> some IntentResult {
        if let url = URL(string: "mathalarm://startProblem") {
            await UIApplication.shared.open(url)
        }
        return .result()
    }
}
